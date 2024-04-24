export {};

declare global {
  interface Array<T> {
    groupBy(fn: (item: T) => string): Record<string, T[]>;
  }
}

// Algorithm Analysis
//      Time Complexity:     Ο(n) Ω(n) Θ(n)
//      Space Complexity:    Ο(n) Ω(n) Θ(n)

Array.prototype.groupBy = function (fn) {
  let response: Record<string, any[]> = {};

  for (let i = 0; i < this.length; i++) {
    const key = fn(this[i]);

    if (!response[key]) {
      response[key] = [];
    }

    response[key].push(this[i]);
  }

  return response;
};
