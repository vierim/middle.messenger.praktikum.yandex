export interface RequestEngine {
  get(
    endPointUrl: string
  ): Promise<unknown>;

  post(
    endPointUrl: string, 
    data?: Record<string, unknown>
  ): Promise<unknown>;

  put(
    endPointUrl: string, 
    data?: Record<string, unknown>
  ): Promise<unknown>;

  putFormData(
    endPointUrl: string, 
    form: FormData
  ): Promise<unknown>;

  delete(
    endPointUrl: string,
    data?: Record<string, unknown>
  ): Promise<unknown>;
}

export enum HttpMethods {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}
