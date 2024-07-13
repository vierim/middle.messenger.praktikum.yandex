import Router from './core/router';
import renderDOM from './core/utils/render';
import store from './services/store';

import AuthAPI from './api/auth-api';
import HttpRequest from './core/http-request';

import {
  LoginPage,
  RegistrationPage,
  FeedPage,
  ProfilePage,
  EditProfilePage,
  EditPasswordPage,
  ErrorPage,
} from './pages';

import './index.scss';

const rootSelector = '#app';
const rootElement = document.querySelector(rootSelector) as Element;

if (!rootElement) {
  throw new Error(`Root element ${rootSelector} wasn't found`);
}

try {
  const auth = new AuthAPI(HttpRequest);
  const usetData = await auth.getUserData();

  store.set('isAuth', true);
  store.set('user', usetData);
} catch (error: unknown) {
  if (error instanceof Error) {
    console.log(error.message);
  }
}

export const router = new Router(rootElement, renderDOM, ErrorPage, {
  defaultAuthPage: '/messenger',
  defaultAnonymousPage: '/',
});

router
  .push({
    url: '/',
    component: LoginPage,
    config: { anonymousOnly: true },
  })
  .push({
    url: '/sign-up',
    component: RegistrationPage,
    config: { anonymousOnly: true },
  })
  .push({
    url: '/messenger',
    component: FeedPage,
    config: { authOnly: true },
  })
  .push({
    url: '/settings',
    component: ProfilePage,
    config: { authOnly: true },
  })
  .push({
    url: '/settings/edit-profile',
    component: EditProfilePage,
    config: { authOnly: true },
  })
  .push({
    url: '/settings/edit-password',
    component: EditPasswordPage,
    config: { authOnly: true },
  });

router.start();
