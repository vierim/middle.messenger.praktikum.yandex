import Component, { Props } from '../../core/component';
import { Link } from '../../core/router';
import {
  enableFormValidation,
  fieldValidity,
  getFieldsValues,
} from '../../core/validation/form-utils';

import { authController } from '../../controllers';

import { Notification } from '../../modules';
import { Input, Button } from '../../components';

import { template } from './registration-page.tmpl';

export class RegistrationPage extends Component {
  constructor(props?: Props) {
    super('main', {
      ...props,
      headline: 'Регистрация',
      class: 'layout',

      email: new Input({
        label: 'Почта',
        name: 'email',
        type: 'email',
        events: {
          focusout: (event: Event) => this.handleFieldFocusOut(event),
        },
      }),
      login: new Input({
        label: 'Логин',
        name: 'login',
        type: 'text',
        events: {
          focusout: (event: Event) => this.handleFieldFocusOut(event),
        },
      }),
      firstName: new Input({
        label: 'Имя',
        name: 'first_name',
        type: 'text',
        events: {
          focusout: (event: Event) => this.handleFieldFocusOut(event),
        },
      }),
      secondName: new Input({
        label: 'Фамилия',
        name: 'second_name',
        type: 'text',
        events: {
          focusout: (event: Event) => this.handleFieldFocusOut(event),
        },
      }),
      phone: new Input({
        label: 'Телефон',
        name: 'phone',
        type: 'tel',
        events: {
          focusout: (event: Event) => this.handleFieldFocusOut(event),
        },
      }),
      password: new Input({
        label: 'Пароль',
        name: 'password',
        type: 'password',
        events: {
          focusout: (event: Event) => this.handleFieldFocusOut(event),
        },
      }),
      repeatPassword: new Input({
        label: 'Пароль (еще раз)',
        name: 'repeat-password',
        type: 'password',
        required: true,
        events: {
          focusout: (event: Event) => this.handleFieldFocusOut(event),
        },
      }),

      button: new Button({
        text: 'Зарегистрироваться',
      }),
      loginPageLink: new Link({
        anchor: 'Войти',
        href: '/',
        class: 'registration-form__link',
      }),

      notification: new Notification(),

      events: {
        submit: (event: Event) => {
          event.preventDefault();
          this.handleRegistrationFormSubmit(event);
        },
      },
    });
  }

  render() {
    return this.compile(template, {
      ...this._children,
      ...this._props,
    });
  }

  handleFieldFocusOut(event: Event) {
    const element = event.target as HTMLInputElement;

    fieldValidity(element);
  }

  async handleRegistrationFormSubmit(event: Event) {
    const registrationForm = event.target as HTMLFormElement;
    const isFormValid = enableFormValidation(registrationForm);

    if (isFormValid) {
      const data = getFieldsValues(registrationForm);
      authController.signUp(data);
    }
  }
}
