export {};

type Fn = (n: number, i: number) => any;

// Algorithm Analysis
//      Time Complexity:     Ο(n) Ω(n) Θ(n)
//      Space Complexity:    Ο(n) Ω(n) Θ(n)

function filter(arr: number[], fn: Fn): number[] {
  let response: number[] = [];

  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) response.push(arr[i]);
  }

  return response;
}
