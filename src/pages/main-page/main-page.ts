import { PageComponent } from '../../core/page';
import { template } from './main-page.tmpl';

class MainPageFactory extends PageComponent {
  constructor(template: string, props?: any) {
    super(template, props);
  }
}

const navigationItems = [
  { url: '/login', linkText: 'Страница "Авторизация"' },
  { url: '/registration', linkText: 'Страница "Регистрация"' },
  { url: '/feed', linkText: 'Страница "Лента сообщений"' },
  { url: '/profile', linkText: 'Страница "Профиль"' },
  { url: '/edit', linkText: 'Страница "Редактирование профиля"' },
  { url: '/password', linkText: 'Страница "Редактирование пароля"' },
  { url: '/frdeee', linkText: 'Страница "Ошибка 404"' },
];

export const MainPage = new MainPageFactory(template, {
  items: navigationItems,
});
