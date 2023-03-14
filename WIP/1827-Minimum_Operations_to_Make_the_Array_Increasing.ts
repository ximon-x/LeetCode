function minOperations(nums: number[]): number {
  let answer = 0;
  let maxIndex = nums.indexOf(Math.max(...nums));

  for (let i = 0; i < nums.length; i++) {
    if (i == maxIndex) continue;

    let diff: number = 0;
    let reqNum: number = 0;

    if (i < maxIndex) {
      // Difference between i and maxIndex
      diff = maxIndex - i;

      // Required number at index i:
      reqNum = nums[maxIndex] - diff;
      console.log(reqNum);
    } else if (i > maxIndex) {
      // Difference between i and maxIndex
      diff = i - maxIndex;

      // Required number at index i:
      reqNum = nums[maxIndex] + diff;
      console.log(reqNum);
    }

    answer += reqNum - nums[i];
  }

  return answer;
}

console.log(minOperations([1, 5, 2, 4, 1]));
