import { HttpMethods, RequestEngine } from './interface';

class HttpRequest implements RequestEngine {
  private _baseUrl: string = '';

  constructor(url: string) {
    this._baseUrl = `https://ya-praktikum.tech${url}`;
  }

  _getRequestUrl(endPointUrl: string): string {
    return `${this._baseUrl}${endPointUrl}`;
  }

  _request(
    url: string,
    method: HttpMethods = HttpMethods.GET,
    data?: string | FormData
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      xhr.open(method, url, true);
      xhr.withCredentials = true;
      if(typeof data === 'string') {
        xhr.setRequestHeader('Content-Type', 'application/json');
      }

      xhr.send(data);

      xhr.onerror = () => {
        reject(xhr.response);
      };

      xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          resolve(xhr.response);
        } else {
          reject(xhr.response);
        }
      };
    });
  }

  _errorHandler(error: unknown) {
    if (typeof error === 'string') {
      const errorData = JSON.parse(error);
      throw new Error(errorData.reason);
    } else {
      throw new Error('Unexpected error');
    }
  }

  async get(endPointUrl: string): Promise<unknown> {

    try {
      const res = await this._request(
        this._getRequestUrl(endPointUrl),
        HttpMethods.GET
      );

      return res === 'OK' ? res : JSON.parse(res);
    } catch (error: unknown) {
      this._errorHandler(error);
    }
  }

  async post(endPointUrl: string, data: Record<string, unknown>) {

    try {
      const res = await this._request(
        this._getRequestUrl(endPointUrl),
        HttpMethods.POST,
        data ? JSON.stringify(data) : undefined
      );

      return res === 'OK' ? res : JSON.parse(res);
    } catch (error: unknown) {
      this._errorHandler(error);
    }
  }

  async put(endPointUrl: string, data: Record<string, unknown>) {

    try {      
      const res = await this._request(
        this._getRequestUrl(endPointUrl),
        HttpMethods.PUT,
        JSON.stringify(data)
      );
  
      return res === 'OK' ? res : JSON.parse(res);
    } catch (error: unknown) {
      this._errorHandler(error);
    }
  }

  async delete(endPointUrl: string, data: Record<string, unknown>) {

    try {      
      const res = await this._request(
        this._getRequestUrl(endPointUrl),
        HttpMethods.DELETE,
        JSON.stringify(data)
      );
  
      return res === 'OK' ? res : JSON.parse(res);
    } catch (error: unknown) {
      this._errorHandler(error);
    }
  }

  async putFormData(endPointUrl: string, data: FormData) {

    try {      
      const res = await this._request(
        this._getRequestUrl(endPointUrl),
        HttpMethods.PUT,
        data
      );
  
      return res === 'OK' ? res : JSON.parse(res);
    } catch (error: unknown) {
      this._errorHandler(error);
    }
  }
}

export default HttpRequest;
