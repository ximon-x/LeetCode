export {};

type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };

type OnceFn = (...args: JSONValue[]) => JSONValue | undefined;

// Algorithm Analysis
//      Time Complexity:     Ο(1) Ω(1) Θ(1)
//      Space Complexity:    Ο(1) Ω(1) Θ(1)

function once(fn: Function): OnceFn {
  let called = false;

  return function (...args) {
    if (called) return;
    called = true;

    return fn(...args);
  };
}
