function subsetXORSum(nums: number[]): number {
  let answer = 0;

  for (let num of nums) answer |= num;
  answer *= Math.pow(2, nums.length - 1);

  return answer;
}
