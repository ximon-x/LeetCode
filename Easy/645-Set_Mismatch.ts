function findErrorNums(nums: number[]): number[] {
  // findErrorNums  -> Time { O(n^2), θ(n^2), Ω(n) } and Space { O(1), θ(1), Ω(1) }

  let duplicate_missing: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        duplicate_missing.push(nums[i]);
        break;
      }
    }
  }

  for (let i = 1; i <= nums.length; i++) {
    if (!nums.includes(i)) {
      duplicate_missing.push(i);
      break;
    }
  }

  return duplicate_missing;
}
