import HttpRequest, { RequestEngine } from '../../core/http-request';

import type { UserInfo } from '../../entities/user';
import type { SignInRequest, SignUpRequest } from './interface';

export default class AuthAPI {
  private _apiInstance: RequestEngine;

  constructor() {
    this._apiInstance = new HttpRequest('/api/v2/auth');
  }

  async signup(data: SignUpRequest) {
    try {
      const response = await this._apiInstance.post('/signup', data);

      return response;
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error('Unexpected error');
      }
    }
  }

  async signIn(data: SignInRequest) {
    try {
      const response = await this._apiInstance.post('/signin', data);

      return response;
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error('Unexpected error');
      }
    }
  }

  async getUserInfo(): Promise<UserInfo> {
    try {
      const response = (await this._apiInstance.get('/user')) as UserInfo;

      return response;
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(error.message);
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
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error('Unexpected error');
      }
    }
  }
}
