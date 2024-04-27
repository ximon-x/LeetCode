export {};

type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };

type Obj = Record<string, JSONValue> | Array<JSONValue>;

// Algorithm Analysis
//      Time Complexity:     Ο(n) Ω(n) Θ(n)
//      Space Complexity:    Ο(n) Ω(n) Θ(n)

function compactObject(obj: Obj): Obj {
  let answer = Array.isArray(obj) ? [] : {};

  // If Obj not an array
  if (Array.isArray(obj)) {
    for (const item of obj) {
      if (item === null) continue;

      if (Array.isArray(item) || typeof item === "object") {
        (answer as Array<JSONValue>).push(compactObject(item));
        continue;
      }

      if (item) (answer as Array<JSONValue>).push(item);
    }
  } else {
    for (const key of Object.keys(obj)) {
      if (obj[key] === null) continue;

      if (Array.isArray(obj[key]) || typeof obj[key] === "object") {
        (answer as Record<string, JSONValue>)[key] = compactObject(
          obj[key] as Obj,
        );
        continue;
      }

      if (obj[key]) (answer as Record<string, JSONValue>)[key] = obj[key];
    }
  }

  return answer;
}
