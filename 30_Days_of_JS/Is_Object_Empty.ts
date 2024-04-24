export {};

type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };

type Obj = Record<string, JSONValue> | JSONValue[];

// Algorithm Analysis
//      Time Complexity:     Ο(n) Ω(n) Θ(n)
//      Space Complexity:    Ο(1) Ω(1) Θ(1)

function isEmpty(obj: Obj): boolean {
  let keys = 0;

  for (let _key in obj) {
    keys++;
  }

  return keys === 0;
}
