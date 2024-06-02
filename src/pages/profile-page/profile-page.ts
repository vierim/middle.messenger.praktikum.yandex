import { PageComponent } from '../../core/page';
import { handleFieldValidity, handleFormSubmit } from '../../core/helpers/forms';
import { Avatar, Char, Button } from '../../components';
import { template } from './profile-page.tmpl';

class ProfilePageFactory extends PageComponent {
  constructor(template: string, props?: any) {
    super(template, props);
  }
}

export const ProfilePage = new ProfilePageFactory(template, {
  isEdit: false,
  avatar: new Avatar({
    changeable: false,
  }),
  userName: 'Иван',
  email: new Char({
    label: 'Почта',
    type: 'email',
    name: 'email',
    value: 'pochta@yandex.ru',
  }),
  login: new Char({
    label: 'Логин',
    type: 'text',
    name: 'login', 
    value: 'ivanivanov',
  }),
  name: new Char({
    label: 'Имя',
    type: 'text',
    name: 'first_name', 
    value: 'Иван',
  }),
  secondName: new Char({
    label: 'Фамилия',
    type: 'text',
    name: 'second_name', 
    value: 'Иванов',
  }),
  nick: new Char({
    label: 'Имя в чате',
    type: 'text',
    name: 'display_name', 
    value: 'Иван',
  }),
  phone: new Char({
    label: 'Телефон',
    type: 'tel',
    name: 'phone', 
    value: '+79099673030',
  }),
});

export const EditProfilePage = new ProfilePageFactory(template, {
  isEdit: true,
  avatar: new Avatar({ 
    changeable: true,
  }),
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
    isEdit: true
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
    isEdit: true
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
    isEdit: true
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
    isEdit: true
  }),
  events: {
    submit: handleFormSubmit,
  },
});
