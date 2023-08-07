function selfDividingNumbers(left: number, right: number): number[] {
  // selfDividingNumbers  -> Time { O(n), θ(n), Ω(1) } and Space { O(n), θ(n), Ω(n) }

  let answer: number[] = [];

  for (let num = left; num <= right; num++) {
    const digits = num.toString().split("");
    let flag = true;

    for (let digit of digits) {
      if (num % parseInt(digit) !== 0) {
        flag = false;
      }
    }

    if (flag) {
      answer.push(num);
    }
  }

  return answer;
}
