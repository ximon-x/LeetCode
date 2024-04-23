export {};

type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };

type Fn = (...args: JSONValue[]) => void;

// Algorithm Analysis
//      Time Complexity:     Ο(1) Ω(1) Θ(1)
//      Space Complexity:    Ο(1) Ω(1) Θ(1)

function cancellable(fn: Fn, args: JSONValue[], t: number): Function {
  let id;

  const runFn = () => {
    fn(...args);
  };

  const cancelFn = () => {
    clearTimeout(id);
  };

  id = setTimeout(runFn, t);

  return cancelFn;
}
