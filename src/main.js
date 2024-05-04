import Handlebars from 'handlebars';
import basicLayout from './layout/main';
import {
  loginPage,
  registrationPage,
  feedPage,
  errorPage,
  profilePage,
  editPasswordPage,
} from './pages';
import {
  loginForm,
  registrationForm,
  searchBar,
  contactsList,
  contactItem,
  chat,
} from './modules';
import { button, menuButton, input } from './components';
import { messages } from './modules/contacts-list/mock-data';
import './index.scss';

const root = document.querySelector('#app');

Handlebars.registerPartial('input', input);
Handlebars.registerPartial('button', button);
Handlebars.registerPartial('menu-button', menuButton);
Handlebars.registerPartial('login-form', loginForm);
Handlebars.registerPartial('registration-form', registrationForm);
Handlebars.registerPartial('search-bar', searchBar);
Handlebars.registerPartial('contacts-list', contactsList);
Handlebars.registerPartial('contact-item', contactItem);
Handlebars.registerPartial('chat', chat);

const basicLayoutTmpl = Handlebars.compile(basicLayout);

const loginPageDelegate = Handlebars.compile(loginPage);
const loginPageContent = loginPageDelegate({
  headline: 'Вход',
});

const registrationPageDelegate = Handlebars.compile(registrationPage);
const registrationPageContent = registrationPageDelegate({
  title: 'Регистрация',
});

const feedPageDelegate = Handlebars.compile(feedPage);
const feedPageContent = feedPageDelegate({
  items: messages,
});

const errorPageDelegate = Handlebars.compile(errorPage);
const errorPageContent = errorPageDelegate({
  code: 404,
  text: 'Не туда попали',
});

const profilePageDelegate = Handlebars.compile(profilePage);
const profilePageContent = profilePageDelegate({
  isEdit: false,
});

const editPasswordDelegate = Handlebars.compile(editPasswordPage);
const editPasswordContent = editPasswordDelegate();

root.innerHTML = basicLayoutTmpl({
  content: editPasswordContent,
});
