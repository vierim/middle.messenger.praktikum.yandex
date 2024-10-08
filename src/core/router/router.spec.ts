import { expect } from 'chai';
import sinon, { SinonStub, SinonSpy } from 'sinon';

import Router from './router';
import Component from '../component';
import { authController } from '../../controllers';
import store from '../../services/store';

import type { Route } from './interface';

describe('Router', () => {
  let router: Router;
  let renderEngineStub: SinonStub;
  let rootElement: Element;

  beforeEach(() => {
    rootElement = document.createElement('div');
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

  it('should navigate to a new url', () => {
    const url: string = '/about';
    const setRouteSpy: SinonSpy = sinon.spy(router as any, 'setRoute');

    router.navigate(url);

    expect(setRouteSpy.calledWith(url)).to.be.true;
    setRouteSpy.restore();
  });

  it('should call popstate listener on start', async () => {
    const getUserDataStub: SinonStub = sinon
      .stub(authController, 'getUserData')
      .resolves();
    const setRouteSpy: SinonSpy = sinon.spy(router as any, 'setRoute');

    await router.start();

    window.dispatchEvent(new PopStateEvent('popstate'));

    expect(setRouteSpy.called).to.be.true;
    setRouteSpy.restore();
    getUserDataStub.restore();
  });

  it('should navigate to defaultAnonymousPage if route is authOnly and user is not authenticated', () => {
    const route: Route = {
      url: '/private',
      component: Component,
      config: { authOnly: true },
    };
    router.push(route);

    sinon.stub(store, 'get').returns({
      isAuth: false,
      user: null,
      chats: [],
      activeChat: null,
      messages: [],
    });
    const navigateSpy: SinonSpy = sinon.spy(router, 'navigate');

    router['setRoute']('/private');

    expect(navigateSpy.calledWith('/')).to.be.true;
    navigateSpy.restore();
  });
});
