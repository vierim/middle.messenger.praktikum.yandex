import Store from './store';
import Component, { Props } from '../component';

import { isEqual } from '../utils';

import type { MapStateToProps } from './interface';

export default function connect<T extends Record<string, unknown>>(
  store: Store<T>,
  component: new (props?: Props) => Component,
  mapStateToProps: MapStateToProps<T>
) {
  return class extends component {
    constructor(props = {}) {
      let localState = mapStateToProps(store.get());

      super({ ...props, ...localState });

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
