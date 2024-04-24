export {};

type Fn = (accum: number, curr: number) => number;

// Algorithm Analysis
//      Time Complexity:     Ο(n) Ω(n) Θ(n)
//      Space Complexity:    Ο(1) Ω(1) Θ(1)

function reduce(nums: number[], fn: Fn, init: number): number {
  for (let i = 0; i < nums.length; i++) {
    init = fn(init, nums[i]);
  }

  return init;
}
