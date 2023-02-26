function differenceOfSum(nums: number[]): number {
  // Time { O(n), θ(n), Ω(n) } and Space { O(1), θ(1), Ω(1) }

  let elementSum = 0;
  let digitSum = 0;

  for (let i = 0; i < nums.length; i++) {
    elementSum += nums[i];

    let digits = nums[i].toString();
    for (let digit of digits) {
      digitSum += parseInt(digit);
    }
  }

  return Math.abs(elementSum - digitSum);
}
