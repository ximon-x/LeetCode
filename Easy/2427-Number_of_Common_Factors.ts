function commonFactors(a: number, b: number): number {
  // commonFactors  -> Time { O(n), θ(n), Ω(1) } and Space { O(n), θ(n), Ω(1) }

  let answer = 0;

  for (let i = 0; i <= Math.max(a, b); i++) {
    if (a % i === 0 && b % i === 0) answer++;
  }

  return answer;
}
