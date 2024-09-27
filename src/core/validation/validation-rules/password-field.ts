import validityUtils from '../validation-utils';
import { defaultValidationResult } from '../constants';
import type { ValidationResult } from '../interface';

function passwordFieldValidator(element: HTMLInputElement): ValidationResult {
  const { value } = element;

  const pattern = /(?=.*\d)(?=.*[A-Z])/;
  const validationResult = { ...defaultValidationResult };

  if (!validityUtils.required(value).isValid) {
    return validityUtils.required(value);
  }

  if (!validityUtils.minLength(value, 8).isValid) {
    return validityUtils.minLength(value, 8);
  }

  if (!validityUtils.maxLength(value, 40).isValid) {
    return validityUtils.maxLength(value, 40);
  }

  if (!validityUtils.patternMatch(value, pattern).isValid) {
    return validityUtils.patternMatch(value, pattern);
  }

  return validationResult;
}

export default passwordFieldValidator;
