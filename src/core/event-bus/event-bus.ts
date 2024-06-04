import { Events } from "./types";

export default class EventBus {
  listeners: Events;

  constructor() {
    this.listeners = {};
  }

  on(event: string, callback: () => void) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }

    this.listeners[event].push(callback);
  }

  off(event: string, callback: () => void) {
		if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }

    this.listeners[event] = this.listeners[event].filter(
      (listener) => listener !== callback
    );
  }

	emit(event: string, ...args: Array<unknown>) {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }
    
    this.listeners[event]?.forEach(function(listener) {
      //@ts-expect-error Unknown count of rest parameters and its types
      listener(...args);
    });
  }
}
