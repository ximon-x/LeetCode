function subsetXORSum(nums: number[]): number {
  if (nums.length == 0) return 0;
  let answer = 0;

  for (let num of nums) {
    answer = answer ^ num;
  }

  return answer;
}
