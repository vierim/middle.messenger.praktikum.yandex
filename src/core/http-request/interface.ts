export interface RequestEngine {
  get(endPointUrl: string): Promise<unknown>;
  post(endPointUrl: string, data?: Record<string, unknown>): Promise<Response>;
  put(endPointUrl: string, data?: Record<string, unknown>): Promise<Response>;
  putFormData(endPointUrl: string, form: FormData): Promise<Response>;
  delete(
    endPointUrl: string,
    data?: Record<string, unknown>
  ): Promise<Response>;
}
