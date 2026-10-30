import {hasIamMfaAuthenticationSignalsPresentation,renderIamMfaAuthenticationSignalsPresentation} from './iam-mfa-authentication-signals-presentations.js';
import {hasIamAccessControlModelsPresentation,renderIamAccessControlModelsPresentation} from './iam-access-control-models-presentations.js';
// Trusted dispatch for newly authored Domain 3 logical-control lessons only.
import {hasIamLeastPrivilegeSodPresentation,renderIamLeastPrivilegeSodPresentation} from './iam-least-privilege-sod-presentations.js';
const presentations=[[hasIamMfaAuthenticationSignalsPresentation,renderIamMfaAuthenticationSignalsPresentation],[hasIamAccessControlModelsPresentation,renderIamAccessControlModelsPresentation],[hasIamLeastPrivilegeSodPresentation,renderIamLeastPrivilegeSodPresentation]];
export const hasDomain3LogicalPresentation=context=>presentations.some(([has])=>has(context));
export function renderDomain3LogicalPresentation(host,context){return presentations.find(([has])=>has(context))?.[1](host,context)}
