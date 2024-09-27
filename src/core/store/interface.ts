export enum StoreEvents {
  Update = 'UPDATE',
}

export type MapStateToProps<T> = (state: T) => object;

export type StoreInterface = {
  get: () => Record<string, unknown>;
  set: (path: string, payload: unknown) => void;
  subscribe(cb: () => void): void;
};
