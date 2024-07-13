import Store from './store';
import { Component, Props } from '../component';
import type { MapStateToProps } from './type';

export default function connect<T extends Record<string, unknown>>(
  store: Store<T>,
  component: new (props: Props) => Component,
  mapStateToProps: MapStateToProps<T>
) {
  return class extends component {
    constructor(props = {}) {
      super({ ...props, ...mapStateToProps(store.get()) });

      store.subscribe(() => {
        this.setProps({ ...mapStateToProps(store.get()) });
      });
    }
  };
}
