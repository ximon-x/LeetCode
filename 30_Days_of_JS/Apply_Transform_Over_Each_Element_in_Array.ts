// Algorithm Analysis
//      Time Complexity:     Ο(n) Ω(n) Θ(n)
//      Space Complexity:    Ο(n) Ω(n) Θ(n)

function map(arr: number[], fn: (n: number, i: number) => number): number[] {
  const response: number[] = [];

  for (let i = 0; i < arr.length; i++) {
    response.push(fn(arr[i], i));
  }

  return response;
}
