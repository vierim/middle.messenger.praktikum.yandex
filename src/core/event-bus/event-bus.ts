import { Events } from "./types";

export default class EventBus {
  listeners: Events;

  constructor(defaultListener?: string) {
    this.listeners = {};

    if(defaultListener) {
      this.listeners[defaultListener] = [];
    }
  }

  on(event: string, callback: () => void) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }

    this.listeners[event].push(callback);
  }

  off(event: string, callback: () => void) {
		if (!this.listeners[event]) {
      console.log(`Событие ${event} не зарегистрировано`);
      return;
    }

    this.listeners[event] = this.listeners[event].filter(
      (listener) => listener !== callback
    );
  }

	emit(event: string, ...args: Array<unknown>) {
    if (!this.listeners[event]) {
      console.log(`Событие ${event} не зарегистрировано`);
      return;
    }
    
    this.listeners[event]?.forEach(function(listener) {
      //@ts-expect-error Unknown count of rest parameters and its types
      listener(...args);
    });
  }
}
