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

import { template } from './login-page.tmpl';

class LoginPage extends Component {
  constructor(props?: Props) {
    super('main', {
      ...props,

      class: 'layout',
      headline: 'Вход',

      login: new Input({
        label: 'Логин',
        name: 'login',
        type: 'text',
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

      button: new Button({
        text: 'Войти',
        type: 'submit',
      }),
      registrationPageLink: new Link({
        anchor: 'Нет аккаунта?',
        href: '/sign-up',
        class: 'login-form__link',
      }),

      notification: new Notification(),

      events: {
        submit: (event: Event) => {
          event.preventDefault();
          this.handleLoginFormSubmit(event)
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

  async handleLoginFormSubmit(event: Event) {
    const loginForm = event.target as HTMLFormElement;
    const isFormValid = enableFormValidation(loginForm);

    if (isFormValid) {
      const { login, password } = getFieldsValues(loginForm);
      authController.signIn(login, password);
    }
  }
}

export default LoginPage;
