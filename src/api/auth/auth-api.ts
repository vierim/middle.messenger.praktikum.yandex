import HttpRequest from '../../core/http-request';

import type { RequestEngine } from '../../core/http-request';
import type { UserInfo } from '../../entities/user';
import type { SignInRequestData, SignUpRequestData } from './interface';

export default class AuthAPI {
  private _apiInstance: RequestEngine;

  constructor() {
    this._apiInstance = new HttpRequest('/api/v2/auth');
  }

  async signup(data: SignUpRequestData) {
    try {
      const response = await this._apiInstance.post('/signup', data);
      return response;
    } catch (error: unknown) {
      if (error instanceof Response) {
        const { reason } = await error.json();
        throw new Error(reason);
      } else {
        throw new Error('Unexpected error');
      }
    }
  }

  async signIn(data: SignInRequestData) {
    try {
      const response = await this._apiInstance.post('/signin', data);

      return response;
    } catch (error: unknown) {
      if (error instanceof Response) {
        const { reason } = await error.json();
        throw new Error(reason);
      } else {
        throw new Error('Unexpected error');
      }
    }
  }

  async getUserInfo(): Promise<UserInfo> {
    try {
      const getUserData = await this._apiInstance.get('/user');

      return getUserData;
    } catch (error: unknown) {
      if (error instanceof Response) {
        const { reason } = await error.json();
        throw new Error(reason);
      } else {
        throw new Error('Unexpected error');
      }
    }
  }

  async logout() {
    try {
      const response = await this._apiInstance.post('/logout');

      return response;
    } catch (error: unknown) {
      if (error instanceof Response) {
        const { reason } = await error.json();
        throw new Error(reason);
      } else {
        throw new Error('Unexpected error');
      }
    }
  }
}
