import { PageComponent } from '../../core/page';
import {
  handleFieldValidity,
  handleFormSubmit,
} from '../../core/helpers/forms';
import Link from '../../core/router/components/link';
import type { Props } from '../../core/component/types';

import { Input, Button } from '../../components';
import { template } from './login-page.tmpl';

const login = new Input({
  label: 'Логин',
  name: 'login',
  type: 'text',
  minLength: '3',
  maxLength: '20',
  pattern: '^(?=.*[A-Za-z])[A-Za-z0-9_]+$',
  required: true,
  events: {
    focusout: handleFieldValidity,
  },
});

const password = new Input({
  label: 'Пароль',
  name: 'password',
  type: 'password',
  minLength: '8',
  maxLength: '40',
  pattern: '^(?=.*[A-Z])(?=.*\\d)[A-Za-z\\d]+$',
  required: true,
  events: {
    focusout: handleFieldValidity,
  },
});

const button = new Button({
  text: 'Войти',
  type: 'submit',
});

const registrationPageLink = new Link({
  anchor: 'Нет аккаунта?',
  href: '/registration',
  class: 'login-form__link',
});

export class LoginPage extends PageComponent {
  constructor(props?: Props) {
    super(template, {
      ...props,
      login,
      password,
      button,
      registrationPageLink,
      headline: 'Вход',
      events: {
        submit: handleFormSubmit,
      },
    });
  }
}
