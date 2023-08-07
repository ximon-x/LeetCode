function countPairs(nums: number[], k: number): number {
  // countPairs    -> Time { O(n^2), θ(n^2), Ω(n) } and Space { O(1), θ(1), Ω(1) }

  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        if ((i * j) % k === 0) {
          result++;
        }
      }
    }
  }

  return result;
}
