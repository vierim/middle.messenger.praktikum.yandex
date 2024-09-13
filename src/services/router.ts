import Router from '../core/router';
import renderDOM from '../core/utils/render';

const rootSelector = '#app';
const rootElement = document.querySelector(rootSelector) as Element;

if (!rootElement) {
  throw new Error(`Root element ${rootSelector} wasn't found`);
}

const router = new Router(rootElement, renderDOM, {
  defaultAuthPage: '/messenger',
  defaultAnonymousPage: '/',
});

export default router;
