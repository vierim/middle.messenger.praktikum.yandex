import Handlebars from 'handlebars';

import basicLayout from './layout/main';
import { loginPage, registrationPage, feedPage, errorPage } from './pages';

import loginForm from './modules/login-form';
import registrationForm from './modules/registration-form';
import { searchBar, contactsList } from './modules';

import { button, input } from './components';

import './index.scss';

const root = document.querySelector('#app');

Handlebars.registerPartial('input', input);
Handlebars.registerPartial('button', button);
Handlebars.registerPartial('login-form', loginForm);
Handlebars.registerPartial('registration-form', registrationForm);
Handlebars.registerPartial('search-bar', searchBar);
Handlebars.registerPartial('contacts-list', contactsList);

const basicLayoutTmpl = Handlebars.compile(basicLayout);

const loginPageDelegate = Handlebars.compile(loginPage);
const loginPageContent = loginPageDelegate({
  title: 'Вход',
  form: loginForm,
});

const registrationPageDelegate = Handlebars.compile(registrationPage);
const registrationPageContent = registrationPageDelegate({
  title: 'Регистрация',
  form: registrationForm,
});

const feedPageDelegate = Handlebars.compile(feedPage);
const feedPageContent = feedPageDelegate();

const errorPageDelegate = Handlebars.compile(errorPage);
const errorPageContent = errorPageDelegate({
  code: 404,
  text: 'Не туда попали'
});

root.innerHTML = basicLayoutTmpl({
  content: errorPageContent,
});
