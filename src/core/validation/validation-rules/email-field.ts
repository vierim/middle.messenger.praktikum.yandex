import validityUtils from '../validation-utils';
import { defaultValidationResult } from '../constants';
import type { ValidationResult } from '../interface';

function emailFieldValidator(element: HTMLInputElement): ValidationResult {
  const { value } = element;

  const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const validationResult = { ...defaultValidationResult };

  if (!validityUtils.required(value).isValid) {
    return validityUtils.required(value);
  }

  if (!validityUtils.patternMatch(value, pattern).isValid) {
    return validityUtils.patternMatch(value, pattern);
  }

  return validationResult;
}

export default emailFieldValidator;
