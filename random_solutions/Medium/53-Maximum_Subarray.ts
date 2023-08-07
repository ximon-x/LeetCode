function maxSubArray(nums: number[]): number {
  // maxSubArray -> Time { O(n), θ(n), Ω(1) } and Space { O(1), θ(1), Ω(1) }

  let localMax: number = 0;
  let globalMax: number = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < nums.length; i++) {
    localMax = Math.max(nums[i], nums[i] + localMax);
    if (localMax > globalMax) {
      globalMax = localMax;
    }
  }

  return globalMax;
}
