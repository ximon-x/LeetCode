function leftRightDifference(nums: number[]): number[] {
  let answer: number[] = [];
  let leftSum: number[] = [];
  let rightSum: number[] = [];

  // Left Sum
  for (let i = 0; i < nums.length; i++) {
    if (i == 0) {
      leftSum[0] = 0;
    } else {
      leftSum[i] = nums[i - 1] + leftSum[i - 1];
    }
  }
  console.log(leftSum);

  // Right Sum
  for (let i = nums.length - 1; i > -1; i--) {
    if (i == nums.length) {
      rightSum[nums.length] = 0;
    } else {
      rightSum[i] = nums[i + 1] + rightSum[i + 1];
    }
  }
  console.log(rightSum);

  //
  return answer;
}

leftRightDifference([10, 4, 8, 3]);
