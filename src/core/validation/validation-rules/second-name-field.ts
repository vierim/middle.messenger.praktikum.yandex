import validityUtils from '../validation-utils';
import { defaultValidationResult } from '../constants';
import type { ValidationResult } from '../interface';

function secondNameFieldValidator(element: HTMLInputElement): ValidationResult {
  const { value } = element;

  const pattern = /^[A-ZА-Я][a-zA-Zа-яА-Я]*$/;
  const validationResult = { ...defaultValidationResult };

  if (!validityUtils.required(value).isValid) {
    return validityUtils.required(value);
  }

  if (!validityUtils.patternMatch(value, pattern).isValid) {
    return validityUtils.patternMatch(value, pattern);
  }

  return validationResult;
}

export default secondNameFieldValidator;
