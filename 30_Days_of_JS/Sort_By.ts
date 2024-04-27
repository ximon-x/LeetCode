export {};

type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };

type Fn = (value: JSONValue) => number;

// Algorithm Analysis
//      Time Complexity:     Ο(nlog(n)) Ω(nlog(n)) Θ(nlog(n))
//      Space Complexity:    Ο(n) Ω(n) Θ(n)

function sortBy(arr: JSONValue[], fn: Fn): JSONValue[] {
  return arr.sort((a, b) => fn(a) - fn(b));
}
