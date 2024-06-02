import { PageComponent } from '../../core/page';
import {
  handleFieldValidity,
  handleFormSubmit,
} from '../../core/helpers/forms';
import { Input, Button } from '../../components';
import { template } from './login-page.tmpl';
import { Props } from '../../core/component/types';

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

class LoginPageFactory extends PageComponent {
  constructor(template: string, props?: Props) {
    super(template, {
      ...props,
      login,
      password,
      button,
    });
  }
}

export const LoginPage = new LoginPageFactory(template, {
  headline: 'Вход',
  events: {
    submit: handleFormSubmit,
  },
});
