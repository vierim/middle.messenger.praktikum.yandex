import { RenderEngine } from '../utils/render';
import { Route } from './types';

export default class Router {
  private static __instance: Router;
  private _routes: Array<Route> = [];
  private _renderEngine: RenderEngine<Element> | undefined;
  _rootElement: Element | null = null;
  _history = window.history;
  _errorPageComponent: any = null;

  constructor(rootElement: Element | null, renderDOM: RenderEngine<Element>) {
    if (Router.__instance) {
      return Router.__instance;
    }

    this._rootElement = rootElement;
    this._renderEngine = renderDOM;
    
    Router.__instance = this;
  }

  setErrorInstance(component: any) {
    this._errorPageComponent = component;
    return this;
  }

  push(route: Route) {
    const { url } = route;

    if (this.hasRouteFor(url)) {
      console.error(`Url '${url}' is already exist`);
    } else {
      this._routes.push(route);
    }

    return this;
  }

  private hasRouteFor(url: string): boolean {
    return this._routes.some((routeItem) => routeItem.url === url);
  }

  start() {
    window.addEventListener('popstate', () => {
      this._setRoute(document.location.pathname);
    });

    const { pathname } = document.location;
    this._setRoute(pathname);
  }

  _setRoute(url: string) {
    const route = this._getRoute(url);

    const component =
      route && this._errorPageComponent
        ? new route.component()
        : new this._errorPageComponent();

    if(this._renderEngine && this._rootElement) {
      this._renderEngine(this._rootElement, component);
    } else {
      console.error('No render engine available');
    }
  }

  _getRoute(url: string) {
    return this._routes.find((route) => route.url === url);
  }

  navigate(url: string) {
    this._history.pushState({}, '', url);
    this._setRoute(url);
  }

  back() {
    this._history.go(-1);
  }
}
