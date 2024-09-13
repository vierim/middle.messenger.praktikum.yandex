import Component from '../component';

export type Route = {
  url: string;
  component: { new (): Component };
  config?: RouteConfig;
};

export type RouteConfig = {
  authOnly?: boolean;
  anonymousOnly?: boolean;
};

export type RenderEngine<T extends Element> = (
  element: T,
  block: Component
) => T | undefined;

export type RouterConfig = {
  defaultAuthPage?: string;
  defaultAnonymousPage?: string;
}
