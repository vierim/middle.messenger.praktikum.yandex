import Store from './store';
import Component, { Props } from '../component';

import { isEqual } from '../utils';

import type { MapStateToProps } from './interface';

export default function connect<K extends Props, T extends Record<string, unknown>>(
  store: Store<T>,
  component: new (props?: K) => Component,
  mapStateToProps: MapStateToProps<T>
) {
  return class extends component {
    constructor(props?: K) {
      let localState = mapStateToProps(store.get());

      super({ ...props, ...localState } as K);

      store.subscribe(() => {
        const updatedState = mapStateToProps(store.get());

        if(!isEqual(localState, updatedState)) {
          this.setProps({ ...updatedState });
          localState = updatedState;
        }
      });
    }
  };
}
