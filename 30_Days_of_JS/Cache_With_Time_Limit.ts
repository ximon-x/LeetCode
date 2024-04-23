class TimeLimitedCache {
  private store: Map<number, number>;
  private timeoutIDs: Map<number, number>;

  constructor() {
    this.store = new Map();
    this.timeoutIDs = new Map();
  }

  // Algorithm Analysis
  //      Time Complexity:     Ο(1) Ω(1) Θ(1)
  //      Space Complexity:    Ο(1) Ω(1) Θ(1)
  set(key: number, value: number, duration: number): boolean {
    const exists = this.store.has(key);
    this.store.set(key, value);

    if (exists) clearTimeout(this.timeoutIDs.get(key));

    this.timeoutIDs.set(
      key,
      setTimeout(() => {
        this.store.delete(key);
      }, duration) as unknown as number,
    );

    return exists;
  }

  // Algorithm Analysis
  //      Time Complexity:     Ο(1) Ω(1) Θ(1)
  //      Space Complexity:    Ο(1) Ω(1) Θ(1)
  get(key: number): number {
    if (!this.store.has(key)) return -1;

    return this.store.get(key)!;
  }

  // Algorithm Analysis
  //      Time Complexity:     Ο(n) Ω(n) Θ(n)
  //      Space Complexity:    Ο(1) Ω(1) Θ(1)
  count(): number {
    let count = 0;

    for (const _key of this.store.keys()) {
      count++;
    }

    return count;
  }
}
