export default class EventBus {
  listeners: any;

  constructor() {
    this.listeners = {};
  }

  on(event: any, callback: any) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }

    this.listeners[event].push(callback);
  }

  off(event: any, callback: any) {
		if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }

    this.listeners[event] = this.listeners[event].filter(
      (listener: any) => listener !== callback
    );
  }

	emit(event: any, ...args: any) {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }
    
    this.listeners[event].forEach(function(listener: (arg0: any) => void) {
      //@ts-ignore
      listener(...args);
    });
  }
}
