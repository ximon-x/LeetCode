function maximizeSum(nums: number[], k: number): number {
  // maximizeSum  ->  Time { O(n), θ(n), Ω(1) } and Space { O(1), θ(1), Ω(1) }

  nums.sort((a, b) => a - b);
  const end = nums.length - 1;

  let answer = 0;

  for (let i = 0; i < k; i++) {
    answer += nums[end];
    nums[end]++;
  }

  return answer;
}
