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
//      Space Complexity:    Ο(n) Ω(n) Θ(n)

function chunk(arr: Obj[], size: number): Obj[][] {
  const answer: Obj[][] = [];

  let c: Obj[] = [];

  for (let i = 0; i < arr.length; i++) {
    if (c.length == size) {
      answer.push(c);
      c = [];
    }

    c.push(arr[i]);

    if (i == arr.length - 1 && c.length !== 0) {
      answer.push(c);
    }
  }

  return answer;
}
