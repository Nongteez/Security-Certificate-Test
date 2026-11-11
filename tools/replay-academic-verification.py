"""Replay unchanged academic checks using byte-verified historical snapshots."""
import argparse
import hashlib
import json
from pathlib import Path
import subprocess
import sys


SOURCE = "8eecd568d3939cf2ef15babab9befd2ee8c74ab6"
EXPANSION = "939cc8ee5c74a926777a0e49073a82d14d330ebb"
PRE_EXPANSION = "f794545744431c3345b36e69de4106f383e61379"
INTEGRATION = "6adfa062b6fe8273ce0c6e787bd9b6734d740268"
ACCEPTANCE = "artifacts/qa/question-bank-200-academic-acceptance"
FINALIZATION = "artifacts/qa/question-bank-200-finalization"
REPAIR = "artifacts/qa/question-bank-academic-repair"
REMEDIATION = "artifacts/qa/question-bank-academic-remediation"
SIGNOFF = "artifacts/qa/question-bank-academic-signoff"
AUDIT = "docs/plans/isc2-cc-2026/question-bank-audit-support"
QUESTION_DIR = "data/certs/isc2/cc/versions/next-bank/questions"
PLAN = "docs/plans/isc2-cc-2026/question-bank-200-expansion-plan.md"
LEGACY_TESTS = {"tools/verify-explanation-formatting-2026.mjs", "tools/verify-study-answers.mjs"}


def question_paths(domains):
    return {f"{QUESTION_DIR}/domain-{domain}.js" for domain in domains}


def git(*args):
    return subprocess.check_output(["git", *args])


def tree(revision):
    entries = {}
    for item in git("ls-tree", "-rz", revision).split(b"\0")[:-1]:
        entry, path = item.split(b"\t", 1)
        mode, kind, oid = entry.split()
        if kind == b"blob" and mode in (b"100644", b"100755"):
            entries[path.decode()] = oid
    return entries


def blob(process, oid):
    process.stdin.write(oid + b"\n")
    process.stdin.flush()
    actual, kind, size = process.stdout.readline().split()
    if actual != oid or kind != b"blob":
        raise ValueError(f"Unexpected Git object response for {oid!r}")
    data = process.stdout.read(int(size))
    if process.stdout.read(1) != b"\n":
        raise ValueError(f"Incomplete Git object {oid!r}")
    return data


def historical_bytes(process, revisions, archive, path, expected, mixed):
    candidates = dict.fromkeys(revision[path] for revision in revisions if path in revision)
    if path in question_paths(range(1, 6)):
        for phase in (REPAIR, REMEDIATION, FINALIZATION, ACCEPTANCE):
            candidates[archive[f"{phase}/{Path(path).stem}.before.js"]] = None
    if path == PLAN:
        candidates[archive[f"{REMEDIATION}/question-bank-200-expansion-plan.before.md"]] = None
    options = [blob(process, oid) for oid in candidates]
    if path in LEGACY_TESTS:
        options.append((Path(__file__).parent / "fixtures/academic-replay" / Path(path).name).read_bytes())
    for data in options:
        lf = data.replace(b"\r\n", b"\n")
        variants = (data, lf, lf.replace(b"\n", b"\r\n"))
        if path in mixed:
            crlf_lines = mixed[path]
            lines = lf.split(b"\n")
            # The recipe stores the one-based newline positions that were CRLF.
            variants += (b"".join(
                line + (b"\r\n" if index in crlf_lines else b"\n")
                for index, line in enumerate(lines[:-1], 1)
            ) + lines[-1],)
        for variant in variants:
            if hashlib.sha256(variant).hexdigest() == expected:
                return variant
    raise ValueError(f"No historical bytes match {path} ({expected})")


def write_new(root, path, data):
    target = (root / path).resolve()
    if not target.is_relative_to(root):
        raise ValueError(f"Path escapes the replay directory: {path}")
    target.parent.mkdir(parents=True, exist_ok=True)
    with target.open("xb") as output:
        output.write(data)


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("phase", choices=("acceptance", "audit157", "expansion", "repair", "remediation", "signoff"))
    parser.add_argument("output", type=Path, help="New scratch directory to keep with the replay output")
    args = parser.parse_args()
    root = args.output.resolve()
    repo = Path(git("rev-parse", "--show-toplevel").decode().strip()).resolve()
    if root.is_relative_to(repo):
        parser.error("Choose a new scratch directory outside the current checkout.")
    root.mkdir(parents=True)
    archive = tree(SOURCE)
    expansion = tree(EXPANSION)
    original = tree(PRE_EXPANSION)
    integrated = tree(INTEGRATION)
    overrides = {}
    revisions = (archive, expansion, original, integrated)
    if args.phase == "acceptance":
        group = ACCEPTANCE
        overrides = {path: archive[path] for path in question_paths((1, 2, 4)) | {"docs/plans/task.md"}}
        run = [("node", "--test", f"{ACCEPTANCE}/verify-acceptance.mjs")]
    elif args.phase == "audit157":
        group = AUDIT
        revisions = (original, expansion, archive, integrated)
        run = [
            ("node", f"{AUDIT}/audit-metrics.mjs"),
            (sys.executable, f"{AUDIT}/build-audit-reports.py"),
            (sys.executable, f"{AUDIT}/verify-audit.py"),
        ]
    elif args.phase == "expansion":
        group = FINALIZATION
        revisions = (expansion, archive, original, integrated)
        overrides = {path: expansion[path] for path in question_paths(range(1, 6)) | {
            "docs/plans/task.md", "data/certs/isc2/cc/versions/next-bank/exam.config.js",
            *LEGACY_TESTS,
        }}
        run = [("node", "--test", "tools/verify-question-bank-200.mjs")]
    elif args.phase == "repair":
        group = REPAIR
        overrides = {path: archive[f"{REMEDIATION}/{Path(path).stem}.before.js"] for path in question_paths((1, 2, 5))}
        run = [("node", "--test", f"{REPAIR}/verify-repairs.mjs")]
    elif args.phase == "remediation":
        group = REMEDIATION
        overrides = {path: archive[f"{FINALIZATION}/{Path(path).stem}.before.js"] for path in question_paths((1, 2))}
        overrides[PLAN] = archive[PLAN]
        run = [("node", "--test", f"{REMEDIATION}/verify-remediation.mjs")]
    else:
        group = SIGNOFF
        run = [(sys.executable, f"{SIGNOFF}/verify-review.py")]

    manifest = f"{group}/" + ("protected-before.json" if group == AUDIT else "entry-hashes.json")
    supplemental = {path: oid for path, oid in archive.items() if path.startswith(f"{group}/")}
    if group == AUDIT:
        prefixes = ("content/", "data/", "js/", "css/", "assets/")
        supplemental.update({path: oid for path, oid in original.items() if path.startswith(prefixes)})
        supplemental["tmp/audit-questions.json"] = archive["tmp/audit-questions.json"]
    elif group == FINALIZATION:
        for path in ("tools/verify-question-bank-200.mjs", "data/certs/isc2/cc/versions/next-bank/question-metadata.json"):
            supplemental[path] = expansion[path]
    elif group == SIGNOFF:
        for name in ("question-bank-academic-signoff.md", "question-bank-200-expansion-plan-review.md"):
            path = f"docs/plans/isc2-cc-2026/{name}"
            supplemental[path] = archive[path]
    supplemental.update(overrides)

    with Path(__file__).with_name("academic-replay-crlf.json").open(encoding="utf-8") as recipe:
        mixed = {
            path: {index for first, last in ranges for index in range(first, last + 1)}
            for path, ranges in json.load(recipe).items()
        }
    checked = 0
    with subprocess.Popen(["git", "cat-file", "--batch"], stdin=subprocess.PIPE, stdout=subprocess.PIPE) as process:
        try:
            required = json.loads(blob(process, archive[manifest]))
            for path, expected in required.items():
                if path in overrides:
                    continue
                write_new(root, path, historical_bytes(process, revisions, archive, path, expected, mixed))
                checked += 1
            for path, oid in supplemental.items():
                if not (root / path).exists():
                    write_new(root, path, blob(process, oid))
        finally:
            process.stdin.close()
        if process.wait():
            raise RuntimeError("git cat-file failed")

    print(f"Verified {checked} historical input hashes in {root}", flush=True)
    for command in run:
        subprocess.run(command, cwd=root, check=True)


if __name__ == "__main__":
    main()
