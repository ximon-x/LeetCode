type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };

// Algorithm Analysis
//      Time Complexity:     Ο(1) Ω(1) Θ(1)
//      Space Complexity:    Ο(1) Ω(1) Θ(1)

function argumentsLength(...args: JSONValue[]): number {
  return args.length;
}
