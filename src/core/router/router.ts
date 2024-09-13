import store from '../../services/store';
import Component from '../component';

import type { Route, RenderEngine, RouterConfig } from './interface';

class Router {
  private static __instance: Router;

  private routes: Array<Route> = [];

  private renderEngine!: RenderEngine<Element>;
  private rootElement!: Element;
  private errorRouteComponent?: Component;

  private defaultAuthPage: string = '';
  private defaultAnonymousPage: string = '';

  private history: History = window.history;

  constructor(
    rootElement: Element,
    renderEngine: RenderEngine<Element>,
    config?: RouterConfig,
  ) {
    if (Router.__instance) {
      return Router.__instance;
    }

    this.rootElement = rootElement;
    this.renderEngine = renderEngine;

    if (config?.defaultAuthPage) {
      this.defaultAuthPage = config?.defaultAuthPage;
    }

    if (config?.defaultAnonymousPage) {
      this.defaultAnonymousPage = config?.defaultAnonymousPage;
    }

    Router.__instance = this;
  }

  push(route: Route) {
    const { url } = route;

    if (this.hasRouteFor(url)) {
      console.log(`Url '${url}' is already exist`);
    } else {
      this.routes.push(route);
    }

    return this;
  }

  setErrorRoute(errorRouteComponent: { new (): Component }) {
    this.errorRouteComponent = new errorRouteComponent;

    return this;
  }

  start() {
    window.addEventListener('popstate', () => {
      this.setRoute(document.location.pathname);
    });

    const { pathname } = document.location;
    this.setRoute(pathname);
  }

  navigate(url: string) {
    console.log(`navigate to ${url}`);
    this.history.pushState({}, '', url);
    this.setRoute(url);
  }

  back() {
    this.history.go(-1);
  }

  private hasRouteFor(url: string): boolean {
    return this.routes.some((route) => route.url === url);
  }

  private setRoute(url: string) {
    if (!this.renderEngine) {
      throw new Error('Unavailable RenderEngine');
    }

    if (!this.rootElement) {
      throw new Error('Unavailable root html element');
    }

    const route = this.getRoute(url);
    const { isAuth } = store.get();

    if (route && route.config?.authOnly && !isAuth) {
      this.navigate(this.defaultAnonymousPage);
      return;
    }

    if (route && route.config?.anonymousOnly && isAuth) {
      this.navigate(this.defaultAuthPage);
      return;
    }

    const component = route ? new route.component() : this.errorRouteComponent;
    if(component) {
      this.renderEngine(this.rootElement, component);
    }
  }

  private getRoute(url: string) {
    return this.routes.find((route) => route.url === url);
  }
}

export default Router;
