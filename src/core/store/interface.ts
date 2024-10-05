export enum StoreEvents {
  Update = 'UPDATE',
}

export type MapStateToProps<T> = (state: T) => Record<string, unknown>;

export type StoreInterface<T> = {
  get: () => T;
  set: (path: string, payload: unknown) => void;
  subscribe(cb: () => void): void;
};
