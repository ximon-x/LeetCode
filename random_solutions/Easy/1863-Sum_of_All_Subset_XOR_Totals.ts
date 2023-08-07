function subsetXORSum(nums: number[]): number {
  // subsetXORSum   -> Time { O(n), θ(n), Ω(n) } and Space { O(1), θ(1), Ω(1) }

  let answer = 0;

  for (let num of nums) answer |= num;
  answer *= Math.pow(2, nums.length - 1);

  return answer;
}
