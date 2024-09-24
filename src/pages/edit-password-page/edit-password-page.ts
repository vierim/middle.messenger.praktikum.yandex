import Component, { Props } from '../../core/component';
import { fieldValidity } from '../../core/validation/form-utils';

import { Avatar, BackButton, Button, Char } from '../../components';

import { template } from './edit-password-page.tmpl';
import router from '../../services/router';
import UserAPI from '../../api/user-api';

export class EditPasswordPage extends Component {
  constructor(props?: Props) {
    super('main', {
      ...props,
      class: 'layout',
      avatar: new Avatar({
        changeable: false,
      }),
      backButton: new BackButton({ class: 'profile__back-btn' }),
      button: new Button({
        text: 'Сохранить',
      }),
      oldPassword: new Char({
        label: 'Старый пароль',
        type: 'password',
        name: 'oldPassword',
        value: '',
        minLength: '8',
        maxLength: '40',
        pattern: '^(?=.*[A-Z])(?=.*\\d)[A-Za-z\\d]+$',
        required: true,
        events: {
          focusout: fieldValidity,
        },
        isEdit: true,
      }),
      newPassword: new Char({
        label: 'Новый пароль',
        type: 'password',
        name: 'newPassword',
        value: '',
        minLength: '8',
        maxLength: '40',
        pattern: '^(?=.*[A-Z])(?=.*\\d)[A-Za-z\\d]+$',
        required: true,
        events: {
          focusout: fieldValidity,
        },
        isEdit: true,
      }),
      newPasswordRepeat: new Char({
        label: 'Повторите пароль',
        type: 'password',
        name: 'repeat-password',
        value: '',
        minLength: '8',
        maxLength: '40',
        pattern: '^(?=.*[A-Z])(?=.*\\d)[A-Za-z\\d]+$',
        required: true,
        events: {
          focusout: fieldValidity,
        },
        isEdit: true,
      }),
      events: {
        submit: handleSubmit,
      },
    });
  }

  render() {
    return this.compile(template, {
      ...this._children,
      ...this._props,
    });
  }
}

async function handleSubmit (event: Event) {
  event.preventDefault();

  const formElements = (event.target as HTMLFormElement).elements;

  const inputList = Array.from(formElements).filter(
    (element): element is HTMLInputElement =>
      !!(element as HTMLInputElement).name
  );

  type FormatedLoginForm = Array<string>

  const x = inputList.reduce<FormatedLoginForm[]>((acc, current) => {
    const { name, value } = current;

    if (name !== 'repeat-password') {
      acc.push([name, value]);
    }

    return acc;
  }, []);

  const data = Object.fromEntries(x);

  const userService = new UserAPI();

  try {
    await userService.updateUserPassword(data);

    router.navigate('/settings');

  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error('Unknown error');
    }
  }
}
