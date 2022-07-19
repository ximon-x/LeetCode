function isUgly(n: number): boolean {
  // isUgly   -> Time { O(n), θ(n), Ω(1) } and Space { O(1), θ(1), Ω(1) }

  while (n > 1) {
    if (n % 2 === 0) {
      n /= 2;
    } else if (n % 3 === 0) {
      n /= 3;
    } else if (n % 5 === 0) {
      n /= 5;
    } else {
      n = 0;
    }
  }

  return n === 1;
}
