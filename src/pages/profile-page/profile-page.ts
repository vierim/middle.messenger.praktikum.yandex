import { PageComponent } from '../../core/page';
import { Props } from '../../core/component/types';
import Link from '../../core/router/components/link';

import { Avatar, BackButton, Char } from '../../components';

import { template } from './profile-page.tmpl';

export class ProfilePage extends PageComponent {
  constructor(props?: Props) {
    super(template, {
      ...props,
      avatar: new Avatar({
        changeable: false,
      }),
      backButton: new BackButton({ class: 'profile__back-btn' }),
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
      editProfilePageLink: new Link({
        anchor: 'Изменить данные',
        href: '/edit',
        class: 'profile__controls-link',
      }),
      editPasswordPageLink: new Link({
        anchor: 'Изменить пароль',
        href: '/password',
        class: 'profile__controls-link',
      }),
      logoutLink: new Link({
        anchor: 'Выйти',
        href: '/',
        class: 'profile__controls-link profile__controls-link_type_exit',
      }),
    });
  }
}
