import { PageComponent } from '../../core/page';
import {
  handleFieldValidity,
  handleFormSubmit,
} from '../../core/helpers/forms';
import { Props } from '../../core/component/types';
import Link from '../../core/router/components/link';

import { Input, Button } from '../../components';

import { template } from './registration-page.tmpl';

const registrationForm = {
  email: new Input({
    label: 'Почта',
    name: 'email',
    type: 'email',
    pattern: '^[A-Za-z\\d._]+@[A-Za-z]+\\.[A-Za-z]{2,}$',
    required: true,
    events: {
      focusout: handleFieldValidity,
    },
  }),
  login: new Input({
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
  }),
  firstName: new Input({
    label: 'Имя',
    name: 'first_name',
    type: 'text',
    pattern: '^[A-ZА-Я][a-zA-Zа-яА-Я]*$',
    required: true,
    events: {
      focusout: handleFieldValidity,
    },
  }),
  secondName: new Input({
    label: 'Фамилия',
    name: 'second_name',
    type: 'text',
    pattern: '^[A-ZА-Я][a-zA-Zа-яА-Я]*$',
    required: true,
    events: {
      focusout: handleFieldValidity,
    },
  }),
  phone: new Input({
    label: 'Телефон',
    name: 'phone',
    type: 'tel',
    minLength: '10',
    maxLength: '15',
    pattern: '^\\+?\\d*$',
    required: true,
    events: {
      focusout: handleFieldValidity,
    },
  }),
  password: new Input({
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
  }),
  repeatPassword: new Input({
    label: 'Пароль (еще раз)',
    name: 'repeat-password',
    type: 'password',
    minLength: '8',
    maxLength: '40',
    pattern: '^(?=.*[A-Z])(?=.*\\d)[A-Za-z\\d]+$',
    required: true,
    events: {
      focusout: handleFieldValidity,
    },
  }),
};

const button = new Button({
  text: 'Зарегистрироваться',
});

const loginPageLink = new Link({
  anchor: 'Войти',
  href: '/login',
  class: 'registration-form__link',
});

export class RegistrationPage extends PageComponent {
  constructor(props?: Props) {
    super(template, {
      ...props,
      ...registrationForm,
      button,
      loginPageLink,
      headline: 'Регистрация',
      events: {
        submit: handleFormSubmit,
      },
    });
  }
}
