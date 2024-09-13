import Validator from '../validator';

export function handleFormSubmit(event: Event) {
  event.preventDefault();

  const formElements = (event.target as HTMLFormElement).elements;
  const inputList = Array.from(formElements).filter(
    (element): element is HTMLInputElement =>
      !!(element as HTMLInputElement).name
  );

  const isFormValidity = !inputList.some(
    (inputElement) => !inputElement.validity.valid
  );

  if (isFormValidity) {
    inputList.forEach((element) => hideErrorMessage(element));

    const data = inputList.map(({ name, value }) => ({ name, value }));
    console.log(data);
  } else {
    inputList.forEach((element) => enableFieldValidation(element));
  }
}

export function fieldValidity(element: HTMLInputElement) {
  if (!element) {
    return;
  }

  const FieldValidator = new Validator(element);
  const { isValid, reason } = FieldValidator.valid();

  if (!isValid) {
    showErrorMessage(element, reason);
  } else {
    hideErrorMessage(element);
  }

  return { isValid, reason };
}

export function enableFieldValidation(element: HTMLInputElement) {
  if (!element) {
    return;
  }

  if (!element.validity.valid) {
    const errorMessage = composeErrorMessage(element);

    showErrorMessage(element, errorMessage);
  } else {
    hideErrorMessage(element);
  }
}

function composeErrorMessage(element: HTMLInputElement) {
  const validityState = element.validity;
  let errorMessage = '';

  if (!element.validity.valid) {
    if (validityState.valueMissing) {
      errorMessage = `Заполните обязательное поле`;
    }

    if (validityState.tooShort) {
      errorMessage = `Длина поля должна быть не менее ${element.minLength} символов`;
    }

    if (validityState.tooLong) {
      errorMessage = `Длина поля должна быть не более ${element.minLength} символов`;
    }

    if (validityState.typeMismatch || validityState.patternMismatch) {
      errorMessage = `Введите корректное значение`;
    }
  }

  return errorMessage;
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
