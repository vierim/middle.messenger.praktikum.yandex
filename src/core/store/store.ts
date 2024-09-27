import { EventBus } from '../event-bus';
import { setObjectValue } from '../utils';
import { StoreEvents } from './interface';

export default class Store<T extends Record<string, unknown>> {
  private _state!: T;
  private _eventEmitter;
  private static __instance: Store<Record<string, unknown>>;

  constructor(initialState: T) {
    if (Store.__instance) {
      return Store.__instance as Store<T>;
    }

    this._eventEmitter = new EventBus(StoreEvents.Update);
    this._state = initialState;

    Store.__instance = this;
  }

  public get(): T {
    return this._state;
  }

  public set(path: string, payload: unknown) {
    if (this._state && this._eventEmitter) {
      this._setState(path, payload);
      
      this._eventEmitter.emit(StoreEvents.Update);
    }
  }

  public subscribe(cb: () => void) {
    if (this._eventEmitter) {
      this._eventEmitter.on(StoreEvents.Update, cb);
    }
  }

  private _setState(path: string, payload: unknown) {
    console.warn('_setState() method');
    console.log({ path, payload });
    console.warn('State before update');
    console.log({ ...this._state });
    
    if(this._state) {
      setObjectValue(this._state, path, payload);
    }

    console.warn('State after update');
    console.log({ ...this._state });
  }
}
