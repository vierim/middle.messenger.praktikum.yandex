import { EventBus } from '../event-bus';
import { StoreEvents } from './type';

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
    console.log({ state: { ...this._state }, path, payload });
    console.log('ATTENTION: usefull _setState() method does not ready!!!');
    
    if(this._state) {
      this._state[path] = payload;
    }

    console.log({ state: { ...this._state }, path, payload });
  }
}
