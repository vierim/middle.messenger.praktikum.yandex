import { Props } from '../../core/component/types';
import { PageComponent } from '../../core/page';
import Link from '../../core/router/components/link';

import { template } from './main-page.tmpl';

const navigationItems = [
  { url: '/login', anchor: 'Страница "Авторизация"' },
  { url: '/registration', anchor: 'Страница "Регистрация"' },
  { url: '/feed', anchor: 'Страница "Лента сообщений"' },
  { url: '/profile', anchor: 'Страница "Профиль"' },
  { url: '/edit', anchor: 'Страница "Редактирование профиля"' },
  { url: '/password', anchor: 'Страница "Редактирование пароля"' },
  { url: '/frdeee', anchor: 'Страница "Ошибка 404"' },
];

export class MainPage extends PageComponent {
  constructor(props?: Props) {
    super(template, {
      ...props,
      items: navigationItems.map(
        ({ url, anchor }) => new Link({ anchor, href: url })
      ),
    });
  }
}
