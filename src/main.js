import Handlebars from 'handlebars';

import basicLayout from './layout/main';
import loginPage from './pages/login';
import form from './modules/login-form';

import { button, input } from './components';

import './index.scss';

const root = document.querySelector('#app');

Handlebars.registerPartial('input', input);
Handlebars.registerPartial('button', button);
Handlebars.registerPartial('form', form);

const basicLayoutTmpl = Handlebars.compile(basicLayout);

const loginPageDelegate = Handlebars.compile(loginPage);
const loginPageContent = loginPageDelegate({
  title: 'Вход',
  form: form,
});

root.innerHTML = basicLayoutTmpl({
  content: loginPageContent,
});
