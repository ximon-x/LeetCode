export {};

// Algorithm Analysis
//      Time Complexity:     Ο(1) Ω(1) Θ(1)
//      Space Complexity:    Ο(1) Ω(1) Θ(1)

function createCounter(n: number): () => number {
  let count = 0;

  return function () {
    count++;

    return n + count - 1;
  };
}
