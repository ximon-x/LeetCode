interface IHash {
  [details: string]: number[];
}

function groupThePeople(groupSizes: number[]): number[][] {
  // groupThePeople   -> Time { O(n), θ(n), Ω(n) } and Space { O(n), θ(n), Ω(n) }

  const result: number[][] = [];
  const hash: IHash = {};

  for (let i = 0; i < groupSizes.length; i++) {
    const num = groupSizes[i];

    if (hash[num]) {
      hash[num].push(i);
    } else hash[num] = [i];

    if (hash[num].length === num) {
      result.push(hash[num]);
      delete hash[num];
    }
  }

  return result;
}
