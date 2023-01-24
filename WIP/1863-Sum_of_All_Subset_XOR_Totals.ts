function subsetXORSum(nums: number[]): number {
  if (nums.length == 0) return 0;
  let answer = 0;

  for (let i = 1; i <= nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      let subsetXOR = 0;

      let subset = nums.slice(j, j + i);

      for (let num of subset) {
        subsetXOR ^= num;
      }

      answer += subsetXOR;
      if (subset.length == nums.length) break;
    }
  }

  return answer;
}
