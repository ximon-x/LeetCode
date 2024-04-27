type MultiDimensionalArray = (number | MultiDimensionalArray)[];

// Algorithm Analysis
//      Time Complexity:     Ο(n) Ω(n) Θ(n)
//      Space Complexity:    Ο(n) Ω(n) Θ(n)

const flat = (arr: MultiDimensionalArray, n: number): MultiDimensionalArray => {
  if (n == 0) return arr;

  const result: MultiDimensionalArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result.push(...flat(arr[i] as MultiDimensionalArray, n - 1));
    } else {
      result.push(arr[i]);
    }
  }

  return result;
};

const arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
const n = 2;

console.log(`Flattened Array: ${JSON.stringify(flat(arr, n), null, 4)}`);
