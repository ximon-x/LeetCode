function leftRigthDifference(nums: number[]): number[] {
  let answer: number[] = new Array(nums.length);
  let leftSum: number[] = new Array(nums.length);
  let rightSum: number[] = new Array(nums.length);

  // Left Sum
  for (let i = 0; i < nums.length; i++) {
    if (i == 0) {
      leftSum[0] = 0;
    } else {
      leftSum[i] = nums[i - 1] + leftSum[i - 1];
    }
  }

  // Right Sum
  for (let i = nums.length - 1; i > -1; i--) {
    if (i == nums.length - 1) {
      rightSum[nums.length - 1] = 0;
    } else {
      rightSum[i] = nums[i + 1] + rightSum[i + 1];
    }
  }

  // Computing answer:
  for (let i = 0; i < answer.length; i++) {
    answer[i] = Math.abs(leftSum[i] - rightSum[i]);
  }

  return answer;
}
