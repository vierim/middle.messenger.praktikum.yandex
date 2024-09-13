import { ValidationMethod, ValidationResult } from './interface';

const loginFieldValidator = (element: HTMLInputElement): ValidationResult => {
  const { value } = element;

  const pattern = /^(?=.*[A-Za-z])([A-Za-z0-9_-])+$/;
  const validationResult: ValidationResult = {
    isValid: true,
    reason: '',
  };

  if (value.length === 0) {
    validationResult.isValid = false;
    validationResult.reason = 'Заполните обязательное поле';

    return validationResult;
  }

  if (value.length < 3) {
    validationResult.isValid = false;
    validationResult.reason = 'Поле не может содержать менее 3 символов';

    return validationResult;
  }

  if (value.length > 20) {
    validationResult.isValid = false;
    validationResult.reason = 'Поле не может содержать более 20 символов';

    return validationResult;
  }

  if (!pattern.test(element.value)) {
    validationResult.isValid = false;
    validationResult.reason = 'Поле содержит недопустимые символы';

    return validationResult;
  }

  return validationResult;
};

const passwordFieldValidator = (
  element: HTMLInputElement
): ValidationResult => {
  const { value } = element;

  const pattern = /(?=.*\d)(?=.*[A-Z])/;
  const validationResult: ValidationResult = {
    isValid: true,
    reason: '',
  };

  if (value.length === 0) {
    validationResult.isValid = false;
    validationResult.reason = 'Заполните обязательное поле';

    return validationResult;
  }

  if (value.length < 8) {
    validationResult.isValid = false;
    validationResult.reason = 'Поле не может содержать менее 8 символов';

    return validationResult;
  }

  if (value.length > 20) {
    validationResult.isValid = false;
    validationResult.reason = 'Поле не может содержать более 40 символов';

    return validationResult;
  }

  if (!pattern.test(element.value)) {
    validationResult.isValid = false;
    validationResult.reason = 'Поле содержит недопустимые символы';

    return validationResult;
  }

  return validationResult;
};

const validationRules: Record<string, ValidationMethod> = {
  login: loginFieldValidator,
  password: passwordFieldValidator,
};

class Validator {
  private _field: HTMLInputElement | null = null;
  private _validationRules: ValidationMethod;
  private _defaultResult: ValidationResult = {
    isValid: false,
    reason: 'Unknown reason',
  };

  constructor(element: HTMLInputElement) {
    this._field = element;
    this._validationRules = validationRules[element.name];
  }

  valid(): ValidationResult {
    if (this._field) {
      return this._validationRules(this._field);
    }

    return this._defaultResult;
  }
}

export default Validator;
