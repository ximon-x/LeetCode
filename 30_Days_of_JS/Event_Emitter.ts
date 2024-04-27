type Callback = (...args: any[]) => any;
type Subscription = {
  unsubscribe: () => void;
};

class EventEmitter {
  private subscribers = new Map<string, Callback[]>();

  // Algorithm Analysis
  //      Time Complexity:     Ο(n) Ω(n) Θ(n)
  //      Space Complexity:    Ο(n) Ω(n) Θ(n)
  subscribe(eventName: string, callback: Callback): Subscription {
    this.subscribers.has(eventName)
      ? this.subscribers.set(eventName, [
          ...this.subscribers.get(eventName)!,
          callback,
        ])
      : this.subscribers.set(eventName, [callback]);

    return {
      // Algorithm Analysis
      //      Time Complexity:     Ο(n) Ω(n) Θ(n)
      //      Space Complexity:    Ο(n) Ω(n) Θ(n)
      unsubscribe: () => {
        this.subscribers.set(
          eventName,
          this.subscribers
            .get(eventName)!
            .filter((c: Callback) => c !== callback),
        );
      },
    };
  }

  // Algorithm Analysis
  //      Time Complexity:     Ο(n) Ω(n) Θ(n)
  //      Space Complexity:    Ο(n) Ω(n) Θ(n)
  emit(eventName: string, args: any[] = []): any[] {
    if (!this.subscribers.has(eventName)) return [];

    const results: any[] = [];

    for (const callback of this.subscribers.get(eventName)!) {
      console.log(callback(...args));

      results.push(callback(args));
    }

    return results;
  }
}
