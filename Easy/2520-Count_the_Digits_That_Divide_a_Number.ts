function countDigits(num: number): number {
  // Time { O(n), θ(n), Ω(n) } and Space { O(1), θ(1), Ω(1) }

  let answer = 0;
  const digits = num.toString();

  for (let digit of digits) {
    if (num % parseInt(digit) == 0) answer++;
  }

  return answer;
}
