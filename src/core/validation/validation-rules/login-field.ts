import validityUtils from '../validation-utils';
import { defaultValidationResult } from '../constants';
import type { ValidationResult } from '../interface';

function loginFieldValidator(element: HTMLInputElement): ValidationResult {
  const { value } = element;

  const pattern = /^(?=.*[A-Za-z])([A-Za-z0-9_-])+$/;
  const validationResult = { ...defaultValidationResult };

  if (!validityUtils.required(value).isValid) {
    return validityUtils.required(value);
  }

  if (!validityUtils.minLength(value, 3).isValid) {
    return validityUtils.minLength(value, 3);
  }

  if (!validityUtils.maxLength(value, 20).isValid) {
    return validityUtils.maxLength(value, 20);
  }

  if (!validityUtils.patternMatch(value, pattern).isValid) {
    return validityUtils.patternMatch(value, pattern);
  }

  return validationResult;
}

export default loginFieldValidator;
