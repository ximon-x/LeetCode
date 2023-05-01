function sumOfMultiples(n: number): number {
  // sumOfMultiples  -> Time { O(n), θ(n), Ω(1) } and Space { O(1), θ(1), Ω(1) }

  let answer = 0;

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 || i % 5 === 0 || i % 7 === 0) {
      answer += i;
    }
  }

  return answer;
}
