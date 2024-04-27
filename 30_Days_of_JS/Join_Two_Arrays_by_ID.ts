export {};

type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };

type ArrayType = { id: number } & Record<string, JSONValue>;

// Algorithm Analysis
//      Time Complexity:     Ο(nlog(n) + mlog(m)) Ω(1)
//      Space Complexity:    Ο(n) Ω(1)

function join(arr1: ArrayType[], arr2: ArrayType[]): ArrayType[] {
  arr1 = arr1.sort((a, b) => a.id - b.id);
  arr2 = arr2.sort((a, b) => a.id - b.id);

  let result: ArrayType[] = [];

  // Pointer for Array 1
  let p = 0;

  // Pointer for Array 2
  let q = 0;

  while (p < arr1.length || q < arr2.length) {
    if (p == arr1.length) {
      result.push(arr2[q]);
      q++;
      continue;
    }

    if (q == arr2.length) {
      result.push(arr1[p]);
      p++;
      continue;
    }

    if (arr1[p].id < arr2[q].id) {
      result.push(arr1[p]);
      p++;
      continue;
    }

    if (arr1[p].id > arr2[q].id) {
      result.push(arr2[q]);
      q++;
      continue;
    }

    if (arr1[p].id == arr1[p].id) {
      let newObj: any = {};

      for (let key of Object.keys(arr1[p])) {
        newObj[key] = arr1[p][key]?.valueOf();
      }

      for (let key of Object.keys(arr2[q])) {
        newObj[key] = arr2[q][key]?.valueOf();
      }

      result.push(newObj);

      p++;
      q++;
    }
  }

  return result;
}

const arr1 = [
    { id: 1, x: 2, y: 3 },
    { id: 2, x: 3, y: 6 },
  ],
  arr2 = [
    { id: 2, x: 10, y: 20 },
    { id: 3, x: 0, y: 0 },
  ];

console.log(`${JSON.stringify(join(arr1, arr2), null, 2)}`);
