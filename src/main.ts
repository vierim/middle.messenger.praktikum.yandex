import { Router } from './core/router';
import renderDOM from './core/utils/render/render';

import {
  MainPage,
  LoginPage,
  RegistrationPage,
  FeedPage,
  ProfilePage,
  EditProfilePage,
  EditPasswordPage,
  ErrorPage,
} from './pages';

import './index.scss';

const rootElement = document.querySelector('#app');
export const router = new Router(rootElement, renderDOM);

router
  .setErrorInstance(ErrorPage)
  .push({ url: '/', component: MainPage })
  .push({ url: '/login', component: LoginPage })
  .push({ url: '/registration', component: RegistrationPage })
  .push({ url: '/feed', component: FeedPage })
  .push({ url: '/profile', component: ProfilePage })
  .push({ url: '/edit', component: EditProfilePage })
  .push({ url: '/password', component: EditPasswordPage })
  .start();
