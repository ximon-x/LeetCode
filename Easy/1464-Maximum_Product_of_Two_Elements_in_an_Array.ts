function maxProduct(nums: number[]): number {
  let answer: number = 0;
  let n = nums.length;

  nums.sort((a, b) => a - b)

  answer = (nums[n-1] - 1) * (nums[n-2] - 1)

  return answer;
}

