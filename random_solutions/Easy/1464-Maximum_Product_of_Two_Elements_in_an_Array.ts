function maxProduct(nums: number[]): number {
  // maxProduct ->  Time { O(n), θ(n), Ω(1) } and Space { O(1), θ(1), Ω(1) }

  let answer: number = 0;
  let n = nums.length;

  nums.sort((a, b) => a - b);

  answer = (nums[n - 1] - 1) * (nums[n - 2] - 1);

  return answer;
}
