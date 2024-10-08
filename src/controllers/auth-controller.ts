import { AuthAPI, SignUpRequest } from '../api';

import router from '../services/router';
import store from '../services/store';

import { errorHandler } from '../utils/error-handler';

class AuthController {
  private readonly authApi: AuthAPI;

  constructor() {
    this.authApi = new AuthAPI();
  }

  async getUserData() {
    try {
      const userData = await this.authApi.getUserInfo();

      store.set('isAuth', true);
      store.set('user', userData);
    } catch (error: unknown) {
      errorHandler(error);
    }
  }

  async signIn(login: string, password: string) {
    try {
      await this.authApi.signIn({ login, password });

      await this.getUserData();

      router.navigate('/messenger');
    } catch (error) {
      errorHandler(error);
    }
  }

  async logout() {
    try {
      await this.authApi.logout();
  
      store.set('isAuth', false);
      store.set('user', null);
  
      router.navigate('/');
    } catch (error) {
      errorHandler(error);
    }
  }

  async signUp(data: SignUpRequest) {
    try {
      await this.authApi.signup(data);

      await this.getUserData();

      router.navigate('/messenger');
    } catch (error) {
      errorHandler(error);
    }
  }
}

export default new AuthController();
