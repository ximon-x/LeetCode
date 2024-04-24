export {};

declare global {
  interface Array<T> {
    last(): T | -1;
  }
}

// Algorithm Analysis
//      Time Complexity:     Ο(1) Ω(1) Θ(1)
//      Space Complexity:    Ο(1) Ω(1) Θ(1)

Array.prototype.last = function () {
  const l = this.length;

  return l === 0 ? -1 : this[l - 1];
};
