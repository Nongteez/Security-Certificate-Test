/**
 * Internationalization helper.
 * Manages UI string resolution and language toggles (EN / TH / EN+TH).
 */

export const UI_STRINGS = {
  appTitle: {
    en: "ISC2 CC — Combined Practice Bank",
    th: "ISC2 CC — คลังข้อสอบฝึกฝนรวม"
  },
  studyModeLabel: {
    en: "Study Mode",
    th: "โหมดการเรียน"
  },
  practiceTitle: {
    en: "Practice",
    th: "ฝึกฝน"
  },
  practiceDesc: {
    en: "Instant feedback & explanations · No time limit",
    th: "เฉลยและคำอธิบายทันที · ไม่จำกัดเวลา"
  },
  examTitle: {
    en: "Exam",
    th: "สอบจำลอง"
  },
  examDesc: {
    en: "125 questions · 120 minutes · Results at the end",
    th: "125 ข้อ · 120 นาที · สรุปผลเมื่อสิ้นสุดการสอบ"
  },
  practiceNote: {
    en: "No time limit · Immediate feedback & explanations",
    th: "ไม่จำกัดเวลา · แสดงเฉลยและคำอธิบายทันทีหลังตอบ"
  },
  examNote: {
    en: "125 questions · 120 minutes · Feedback after completion",
    th: "125 ข้อ · 120 นาที · สรุปผลและเฉลยหลังสอบเสร็จ"
  },
  orderLabel: {
    en: "Order",
    th: "ลำดับคำถาม"
  },
  sequentialTitle: {
    en: "Sequential",
    th: "เรียงลำดับ"
  },
  sequentialDesc: {
    en: "Questions in order",
    th: "คำถามเรียงตามลำดับ"
  },
  randomTitle: {
    en: "Random",
    th: "สุ่ม"
  },
  randomDesc: {
    en: "Shuffled questions",
    th: "คำถามแบบสุ่ม"
  },
  examOrderLocked: {
    en: "Randomized for mock exam",
    th: "สุ่มลำดับคำถามสำหรับข้อสอบจำลอง"
  },
  domainsLabel: {
    en: "Domains",
    th: "โดเมน"
  },
  selectAll: {
    en: "Select all",
    th: "เลือกทั้งหมด"
  },
  clearAll: {
    en: "Clear all",
    th: "ล้างการเลือก"
  },
  examAllDomainsLocked: {
    en: "All 5 domains included",
    th: "รวมครบทั้ง 5 โดเมน"
  },
  questionsCountLabel: {
    en: "Number of questions",
    th: "จำนวนข้อ"
  },
  warnSelectDomain: {
    en: "Select at least one domain to begin.",
    th: "กรุณาเลือกอย่างน้อยหนึ่งโดเมนเพื่อเริ่มต้น"
  },
  availableSuffix: {
    en: "questions available from selected domains",
    th: "ข้อที่มีให้ฝึกจากโดเมนที่เลือก"
  },
  examSettingsLabel: {
    en: "Exam Settings",
    th: "การตั้งค่าข้อสอบจำลอง"
  },
  examQuestionsBadge: {
    en: "125 Questions",
    th: "125 ข้อ"
  },
  examTimeBadge: {
    en: "120 Minutes",
    th: "120 นาที"
  },
  examDistributionNote: {
    en: "125 questions across all 5 domains",
    th: "125 ข้อ ครอบคลุมทั้ง 5 โดเมน"
  },
  startPracticeBtn: {
    en: "Start Practice",
    th: "เริ่มฝึกทำข้อสอบ"
  },
  startExamBtn: {
    en: "Start Exam",
    th: "เริ่มสอบจำลอง"
  },
  startQuizBtn: {
    en: "Start Quiz",
    th: "เริ่มทำข้อสอบ"
  },
  backToCertifications: {
    en: "← Back to Certifications",
    th: "← กลับไปยังหน้ารวมใบรับรอง"
  },
  outlineVersion: {
    en: "Exam Outline",
    th: "แนวข้อสอบ"
  },
  questionsUnit: {
    en: "Questions",
    th: "ข้อ"
  },
  readyNotificationTitle: {
    en: "Quiz Setup Configured",
    th: "บันทึกการตั้งค่าข้อสอบแล้ว"
  },
  readyNotificationDesc: {
    en: "Your setup parameters have been saved in state. The real 583-question bank and quiz engine migration will follow in Phase 3.",
    th: "บันทึกข้อมูลการตั้งค่าในระบบเรียบร้อย การย้ายคลังข้อสอบ 583 ข้อและระบบทำข้อสอบจริงจะดำเนินการใน Phase 3"
  },
  closeBtn: {
    en: "Close",
    th: "ปิด"
  },
  explanation: {
    en: "Explanation",
    th: "คำอธิบาย"
  },
  nextQuestion: {
    en: "Next Question →",
    th: "ข้อถัดไป →"
  },
  prevQuestion: {
    en: "← Previous",
    th: "← ก่อนหน้า"
  },
  exitQuiz: {
    en: "Exit Quiz",
    th: "ออกจากแบบทดสอบ"
  },
  finishQuiz: {
    en: "Finish Quiz",
    th: "สิ้นสุดแบบทดสอบ"
  },
  noTimeLimit: {
    en: "No Time Limit",
    th: "ไม่จำกัดเวลา"
  },
  correctLabel: {
    en: "Correct",
    th: "ถูกต้อง"
  },
  wrongLabel: {
    en: "Wrong",
    th: "ไม่ถูกต้อง"
  },
  questionProgress: {
    en: "Question",
    th: "คำถามข้อที่"
  },
  ofLabel: {
    en: "of",
    th: "จากทั้งหมด"
  },
  finishPractice: {
    en: "Finish Practice",
    th: "จบการฝึกฝน"
  },
  finishExam: {
    en: "Finish Exam",
    th: "ส่งข้อสอบ"
  },
  finishConfirmTitle: {
    en: "Finish Quiz?",
    th: "ยืนยันการสิ้นสุดแบบทดสอบ?"
  },
  finishConfirmAllAnswered: {
    en: "All questions have been answered. Are you ready to finish and submit?",
    th: "คุณตอบคำถามครบทุกข้อแล้ว พร้อมที่จะจบแบบทดสอบหรือไม่?"
  },
  finishConfirmUnansweredWarn: {
    en: "You still have unanswered questions. Unanswered questions will be counted as incorrect in Exam mode.",
    th: "คุณยังมีคำถามที่ยังไม่ได้ตอบ คำถามที่เว้นว่างจะถูกนับเป็นข้อผิดในการสอบจำลอง"
  },
  answeredLabel: {
    en: "Answered",
    th: "ตอบแล้ว"
  },
  unansweredLabel: {
    en: "Unanswered",
    th: "ยังไม่ได้ตอบ"
  },
  continueQuiz: {
    en: "Continue Quiz",
    th: "ทำข้อสอบต่อ"
  },
  submitFinish: {
    en: "Finish / Submit",
    th: "ส่งแบบทดสอบ"
  },
  exitConfirmTitle: {
    en: "Exit Quiz?",
    th: "ออกจากแบบทดสอบ?"
  },
  exitConfirmDesc: {
    en: "Are you sure you want to exit? Your current quiz progress and score will be discarded.",
    th: "คุณแน่ใจหรือไม่ว่าต้องการออก? ความคืบหน้าและคะแนนในรอบนี้จะถูกยกเลิก"
  },
  exitConfirmBtn: {
    en: "Exit Quiz",
    th: "ออกจากแบบทดสอบ"
  },
  examTimedOutTitle: {
    en: "Time's Up!",
    th: "หมดเวลาสอบ!"
  },
  examTimedOutDesc: {
    en: "The 120-minute exam time limit has expired. Your exam has been submitted automatically.",
    th: "หมดเวลาสอบ 120 นาทีแล้ว ระบบได้ทำการส่งแบบทดสอบของคุณโดยอัตโนมัติ"
  },
  // Results & Review Screen strings
  resultsTitle: {
    en: "Quiz Results",
    th: "สรุปผลการทดสอบ"
  },
  resultsSubtitle: {
    en: "Performance Summary",
    th: "สรุปผลคะแนน"
  },
  passStatus: {
    en: "PASS",
    th: "ผ่าน"
  },
  failStatus: {
    en: "FAIL",
    th: "ไม่ผ่าน"
  },
  examPassedTitle: {
    en: "Congratulations! You Passed!",
    th: "ยินดีด้วย! คุณสอบผ่านเกณฑ์"
  },
  examFailedTitle: {
    en: "Did Not Pass",
    th: "ยังไม่ผ่านเกณฑ์การสอบ"
  },
  examTimedOutResultTitle: {
    en: "Time Expired · Did Not Pass",
    th: "หมดเวลาสอบ · ยังไม่ผ่านเกณฑ์"
  },
  practiceGreatJobTitle: {
    en: "Great Job! Practice Completed",
    th: "ยอดเยี่ยม! จบการฝึกฝนแล้ว"
  },
  practiceCompletedTitle: {
    en: "Practice Completed",
    th: "จบการฝึกฝนแล้ว"
  },
  incorrectLabel: {
    en: "Incorrect",
    th: "ไม่ถูกต้อง"
  },
  scoreLabel: {
    en: "Score",
    th: "คะแนน"
  },
  newQuizBtn: {
    en: "New Quiz",
    th: "สร้างชุดข้อสอบใหม่"
  },
  retryBtn: {
    en: "Retry",
    th: "เริ่มทำใหม่อีกครั้ง"
  },
  reviewWrongBtn: {
    en: "Review Wrong Answers",
    th: "ดูข้อที่ตอบผิด"
  },
  retryWrongBtn: {
    en: "Retry Wrong Answers",
    th: "ฝึกทำเฉพาะข้อที่ผิด"
  },
  reviewWrongTitle: {
    en: "Review Wrong Answers",
    th: "ทบทวนข้อที่ตอบผิด"
  },
  reviewWrongSubtitle: {
    en: "Reviewing questions answered incorrectly in completed attempt",
    th: "ทบทวนคำถามที่คุณตอบผิดจากการทำข้อสอบในรอบนี้"
  },
  backToResults: {
    en: "← Back to Results",
    th: "← กลับไปยังหน้าผลสอบ"
  },
  yourAnswerLabel: {
    en: "Your Answer",
    th: "คำตอบของคุณ"
  },
  correctAnswerLabel: {
    en: "Correct Answer",
    th: "คำตอบที่ถูกต้อง"
  },
  noWrongAnswersTitle: {
    en: "Perfect Score! No Wrong Answers",
    th: "ยอดเยี่ยม! ไม่มีข้อที่ตอบผิด"
  },
  noWrongAnswersDesc: {
    en: "You answered all questions correctly in this session.",
    th: "คุณตอบคำถามถูกต้องครบทุกข้อในรอบนี้"
  },
  reviewItemCounter: {
    en: "Wrong Question",
    th: "ข้อที่ตอบผิด"
  },
  reviewModeBadge: {
    en: "Review Mode",
    th: "โหมดทบทวน"
  }
};

/**
 * Returns the localized UI text for a key.
 * UI labels are always English to keep navigation clean and compact.
 * @param {string} key - String identifier
 * @returns {string} Localized string
 */
export function t(key) {
  const entry = UI_STRINGS[key];
  if (!entry) return key;
  return entry.en;
}

