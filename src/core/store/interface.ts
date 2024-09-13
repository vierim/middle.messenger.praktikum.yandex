export enum StoreEvents {
  Update = 'UPDATE',
}

export type MapStateToProps<T> = (state: T) => object;
