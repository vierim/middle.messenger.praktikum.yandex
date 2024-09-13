import { RequestEngine } from "./interface";

class HttpRequest implements RequestEngine {
  private _baseUrl: string = '';

  constructor(url: string) {
    this._baseUrl = `https://ya-praktikum.tech${url}`;
  }

  _getRequestUrl(endPointUrl: string): string {
    return `${this._baseUrl}${endPointUrl}`;
  }

  async get(endPointUrl: string) {
    const res = await fetch(this._getRequestUrl(endPointUrl), {
      method: 'GET',
      mode: 'cors',
      credentials: 'include',
    });

    if (!res.ok) {
      return Promise.reject(res);
    }

    const data = await res.json();
    return data;
  }

  async post(endPointUrl: string, data: Record<string, unknown>) {
    const res = await fetch(this._getRequestUrl(endPointUrl), {
      method: 'post',
      credentials: 'include',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: data ? JSON.stringify(data) : undefined,
    });

    if (!res.ok) {
      return Promise.reject(res);
    }

    return res;
  }

  async put(endPointUrl: string, data: Record<string, unknown>) {
    const res = await fetch(this._getRequestUrl(endPointUrl), {
      method: 'put',
      credentials: 'include',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      return Promise.reject(res);
    }

    return res;
  }

  async putFormData(endPointUrl: string, data: FormData) {
    const res = await fetch(this._getRequestUrl(endPointUrl), {
      method: 'put',
      credentials: 'include',
      mode: 'cors',
      body: data,
    });

    if (!res.ok) {
      return Promise.reject(res);
    }

    return res;
  }
}

export default HttpRequest;
