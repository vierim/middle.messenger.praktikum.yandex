import { PageComponent } from '../../core/page';
import { Props } from '../../core/component/types';
import {
  handleFieldValidity,
  handleFormSubmit,
} from '../../core/helpers/forms';

import { Avatar, Char, Button, BackButton } from '../../components';

import { template } from './edit-profile-page.tmpl';
import { router } from '../../main';

export class EditProfilePage extends PageComponent {
  constructor(props?: Props) {
    super(template, {
      ...props,
      avatar: new Avatar({
        changeable: true,
      }),
      backButton: new BackButton({ class: 'profile__back-btn' }),
      button: new Button({
        text: 'Сохранить',
      }),
      email: new Char({
        label: 'Почта',
        type: 'email',
        name: 'email',
        value: 'pochta@yandex.ru',
        pattern: '^[A-Za-z\\d._]+@[A-Za-z]+\\.[A-Za-z]{2,}$',
        isEdit: true,
      }),
      login: new Char({
        label: 'Логин',
        type: 'text',
        name: 'login',
        value: 'ivanivanov',
        minLength: '3',
        maxLength: '20',
        pattern: '^(?=.*[A-Za-z])[A-Za-z0-9_]+$',
        required: true,
        events: {
          focusout: handleFieldValidity,
        },
        isEdit: true,
      }),
      name: new Char({
        label: 'Имя',
        type: 'text',
        name: 'first_name',
        value: 'Иван',
        pattern: '^[A-ZА-Я][a-zA-Zа-яА-Я]*$',
        required: true,
        events: {
          focusout: handleFieldValidity,
        },
        isEdit: true,
      }),
      secondName: new Char({
        label: 'Фамилия',
        type: 'text',
        name: 'second_name',
        value: 'Иванов',
        pattern: '^[A-ZА-Я][a-zA-Zа-яА-Я]*$',
        required: true,
        events: {
          focusout: handleFieldValidity,
        },
        isEdit: true,
      }),
      nick: new Char({
        label: 'Имя в чате',
        type: 'text',
        name: 'display_name',
        value: 'Иван',
        pattern: '^[A-ZА-Я][a-zA-Zа-яА-Я]*$',
        required: true,
        events: {
          focusout: handleFieldValidity,
        },
        isEdit: true,
      }),
      phone: new Char({
        label: 'Телефон',
        type: 'tel',
        name: 'phone',
        value: '+79099673030',
        minLength: '10',
        maxLength: '15',
        pattern: '^\\+?\\d*$',
        required: true,
        events: {
          focusout: handleFieldValidity,
        },
        isEdit: true,
      }),
      events: {
        submit: (evt) => {
          handleFormSubmit(evt);
          router.navigate('/profile');
        },
      },
    });
  }
}
