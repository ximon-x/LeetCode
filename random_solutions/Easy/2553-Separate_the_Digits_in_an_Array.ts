function separateDigits(nums: number[]): number[] {
  // Time { O(n), θ(n), Ω(n) } and Space { O(n), θ(n), Ω(n) }

  let answer: number[] = [];

  for (let num of nums) {
    let digits = num.toString();

    for (let i = 0; i < digits.length; i++) {
      answer.push(parseInt(digits[i], 10));
    }
  }

  return answer;
}
