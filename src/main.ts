import Handlebars from 'handlebars';
import basicLayout from './layout/main';
import {
  mainPage,
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
import { button, menuButton, input, avatar } from './components';
import { messages } from './modules/contacts-list/mock-data';
import './index.scss';

const root = document.querySelector('#app');

Handlebars.registerPartial('input', input);
Handlebars.registerPartial('button', button);
Handlebars.registerPartial('menu-button', menuButton);
Handlebars.registerPartial('login-form', loginForm);
Handlebars.registerPartial('registration-form', registrationForm);
Handlebars.registerPartial('search-bar', searchBar);
Handlebars.registerPartial('avatar', avatar);
Handlebars.registerPartial('contacts-list', contactsList);
Handlebars.registerPartial('contact-item', contactItem);
Handlebars.registerPartial('chat', chat);

const basicLayoutTmpl = Handlebars.compile(basicLayout);

const mainPageDelegate = Handlebars.compile(mainPage);
const mainPageContent = mainPageDelegate();

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
const editProfilePageContent = profilePageDelegate({
  isEdit: true,
});

const editPasswordDelegate = Handlebars.compile(editPasswordPage);
const editPasswordContent = editPasswordDelegate();

const currentPageUrl = window.location.pathname;
let page;

switch (currentPageUrl) {
  case '/login':
    page = loginPageContent;
    break;
  case '/registration':
    page = registrationPageContent;
    break;
  case '/feed':
    page = feedPageContent;
    break;
  case '/profile':
    page = profilePageContent;
    break;
  case '/edit':
    page = editProfilePageContent;
    break;
  case '/password':
    page = editPasswordContent;
    break;
  case '/error':
    page = errorPageContent;
    break;
  default:
    page = mainPageContent;
}

root.innerHTML = basicLayoutTmpl({
  content: page,
});
