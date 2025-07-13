// Exemplo real de Event Bus para Event-Driven Architecture
export class EventBus {
  private listeners = new Map<string, Array<(data: unknown) => void>>();

  on(event: string, callback: (data: unknown) => void) {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, []);
    }
    this.listeners.get(event)!.push(callback);
  }

  emit(event: string, data: unknown) {
    const callbacks = this.listeners.get(event) || [];
    callbacks.forEach((cb) => cb(data));
  }
} 