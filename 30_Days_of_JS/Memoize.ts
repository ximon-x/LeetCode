export {};

type Fn = (...params: number[]) => number;

// Algorithm Analysis
//      Time Complexity:     Ο(1) Ω(1) Θ(1)
//      Space Complexity:    Ο(1) Ω(1) Θ(1)

function memoize(fn: Fn): Fn {
  const solutions = new Map<string, number>();

  return function (...args) {
    const key = JSON.stringify(args);

    if (solutions.has(key)) return solutions.get(key)!;

    const memo = fn(...args);
    solutions.set(key, memo);

    return memo;
  };
}
