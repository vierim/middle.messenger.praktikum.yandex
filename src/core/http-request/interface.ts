export interface RequestEngine {
  get(endPointUrl: string): Promise<any>;
  post(endPointUrl: string, data?: Record<string, unknown>): Promise<any>;
  put(endPointUrl: string, data?: Record<string, unknown>): Promise<any>;
}
