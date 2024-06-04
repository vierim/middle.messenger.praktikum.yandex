import renderDOM from './core/utils/render';
import { Component } from './core/component';
import {
  MainPage,
  LoginPage,
  ErrorPage,
  RegistrationPage,
  ProfilePage,
  FeedPage,
  EditPasswordPage,
  EditProfilePage,
} from './pages';

import './index.scss';

let page: Component;

switch (window.location.pathname) {
  case '/':
    page = MainPage;
    break;
  case '/login':
    page = LoginPage;
    break;
  case '/registration':
    page = RegistrationPage;
    break;
  case '/feed':
    page = FeedPage;
    break;
  case '/profile':
    page = ProfilePage;
    break;
  case '/edit':
    page = EditProfilePage;
    break;
  case '/password':
    page = EditPasswordPage;
    break;
  default:
    page = ErrorPage;
}

renderDOM('#app', page);
