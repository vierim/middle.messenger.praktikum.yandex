import { ValidationMethod, ValidationResult } from './interface';
import {
  emailFieldValidator,
  loginFieldValidator,
  nameFieldValidator,
  passwordFieldValidator,
  phoneFieldValidator,
  secondNameFieldValidator,
} from './validation-rules';

const validationRules: Record<string, ValidationMethod> = {
  login: loginFieldValidator,
  password: passwordFieldValidator,
  email: emailFieldValidator,
  first_name: nameFieldValidator,
  second_name: secondNameFieldValidator,
  phone: phoneFieldValidator,
  'repeat-password': passwordFieldValidator,
  newPassword: passwordFieldValidator,
  oldPassword: passwordFieldValidator,
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

  valid(): ValidationResult | undefined {
    if (!this._validationRules) {
      return;
    }

    if (this._field) {
      return this._validationRules(this._field);
    }

    return this._defaultResult;
  }
}

export default Validator;
