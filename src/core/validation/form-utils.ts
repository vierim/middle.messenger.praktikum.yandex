import Validator from './validator';

function getInputFieldsInForm(
  formElement: HTMLFormElement
): HTMLInputElement[] {
  const { elements } = formElement;

  const inputList = Array.from(elements).filter(
    (element): element is HTMLInputElement =>
      !!(element as HTMLInputElement).name
  );

  return inputList;
}

function getFieldsValues(formElement: HTMLFormElement): Record<string, string> {
  const inputList = getInputFieldsInForm(formElement);

  return Object.fromEntries(
    inputList
      .filter((item) => {
        return item.name !== 'repeat-password';
      })
      .map((item) => {
        return [item.name, item.value];
      })
  );
}

function enableFormValidation(formElement: HTMLFormElement) {
  if (!formElement) {
    return;
  }

  const inputList = getInputFieldsInForm(formElement);
  if (inputList.length === 0) {
    return;
  }

  let result = true;

  inputList.forEach((element) => {
    const res = fieldValidity(element);

    if (res === undefined) {
      console.error(`Skip validation for ${element.name} field`);
    } else {
      if (!res?.isValid) {
        result = false;
      }
    }
  });

  return result;
}

export function fieldValidity(element: HTMLInputElement) {
  if (!element) {
    return;
  }

  const FieldValidator = new Validator(element);
  const validationResult = FieldValidator.valid();

  if (!validationResult) {
    return;
  }

  const { isValid, reason } = validationResult;

  if (!isValid) {
    showErrorMessage(element, reason);
  } else {
    hideErrorMessage(element);
  }

  return { isValid, reason };
}

function showErrorMessage(
  inputElement: HTMLElement,
  errorMessage: string = ''
) {
  if (!inputElement || errorMessage.length === 0) {
    return;
  }

  const errorElement = document.querySelector(`.${inputElement.id}-error`);

  if (!errorElement) {
    return;
  }

  errorElement.textContent = errorMessage;
  errorElement.classList.add('error-message_visibility_true');
}

function hideErrorMessage(inputElement: HTMLElement) {
  if (!inputElement) {
    return;
  }

  const errorElement = document.querySelector(`.${inputElement.id}-error`);

  if (!errorElement) {
    return;
  }

  errorElement.classList.remove('error-message_visibility_true');
  errorElement.textContent = '';
}

export { getInputFieldsInForm, getFieldsValues, enableFormValidation };
