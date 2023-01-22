function rearrangeArray(nums: number[]): number[] {
  // rearrangeArray -> Time { O(n), θ(n), Ω(n) } and Space { O(n), θ(n), Ω(n) }

  let posNums: number[] = [];
  let negNums: number[] = [];
  let result: number[] = [];

  for (let num of nums) {
    if (num < 0) negNums.push(num);
    else posNums.push(num);
  }

  for (let i = 0; i < posNums.length; i++) {
    result.push(posNums[i]);
    result.push(negNums[i]);
  }

  return result;
}
