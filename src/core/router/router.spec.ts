import { expect } from 'chai';
import sinon, { SinonStub } from 'sinon';

import Router from './router';
import { Route } from './interface';
import Component from '../component';

describe('Router', () => {
  let router: Router;
  let renderEngineStub: SinonStub;
  let rootElement: Element;

  beforeEach(() => {
    rootElement = document.createElement('div');
    rootElement.id = 'app';
    renderEngineStub = sinon.stub();
    router = new Router(rootElement, renderEngineStub, {
      defaultAuthPage: '/messenger',
      defaultAnonymousPage: '/',
    });
  });

  afterEach(() => {
    sinon.restore();
  });

  it('should create an instance of Router', () => {
    expect(router).to.be.an.instanceof(Router);
  });

  it('should push a new route', () => {
    const route: Route = { url: '/home', component: Component };
    router.push(route);

    expect((router as any).routes).to.include(route);
  });

  it('should not push a route with an existing url', () => {
    const route: Route = { url: '/home', component: Component };
    router.push(route);
    router.push(route);

    expect((router as any).routes).to.have.lengthOf(1);
  });
});
