function pivotArray(nums: number[], pivot: number): number[] {
  // pivotArray -> Time { O(n), θ(n), Ω(n) } and Space { O(n), θ(n), Ω(n) }

  let pivots: number[] = [];
  let small: number[] = [];
  let large: number[] = [];

  for (let num of nums) {
    if (num < pivot) small.push(num);
    else if (num > pivot) large.push(num);
    else pivots.push(num);
  }

  const result = small.concat(pivots.concat(large));
  return result;
}
