import { defaultValidationResult } from './constants';
import type { ValidationResult } from './interface';

const validityUtils = {
  required: requiredStringFieldValidity,
  minLength: minLengthValidity,
  maxLength: maxLengthValidity,
  patternMatch: patternMatchValidity,
};

function requiredStringFieldValidity(value: string) {
  const validationResult = { ...defaultValidationResult };

  if (value.length === 0) {
    validationResult.isValid = false;
    validationResult.reason = 'Заполните обязательное поле';
  }

  return validationResult;
}

function minLengthValidity(value: string, minLength: number): ValidationResult {
  const validationResult = { ...defaultValidationResult };

  if (value.length < minLength) {
    validationResult.isValid = false;
    validationResult.reason = `Поле не может содержать менее ${minLength} символов`;
  }

  return validationResult;
}

function maxLengthValidity(value: string, maxLength: number): ValidationResult {
  const validationResult = { ...defaultValidationResult };

  if (value.length > maxLength) {
    validationResult.isValid = false;
    validationResult.reason = `Поле не может содержать более ${maxLength} символов`;
  }

  return validationResult;
}

function patternMatchValidity(value: string, pattern: RegExp) {
  const validationResult = { ...defaultValidationResult };

  if (!pattern.test(value)) {
    validationResult.isValid = false;
    validationResult.reason = 'Поле содержит недопустимые символы';
  }

  return validationResult;
}

export default validityUtils;
