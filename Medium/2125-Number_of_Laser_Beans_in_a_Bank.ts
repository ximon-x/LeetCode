function numberOfBeams(bank: string[]): number {
  // numberOfBeams ->    Time { O(n^2), θ(n^2), Ω(n) } and Space { O(1), θ(1), Ω(1) }

  let answer = 0;
  let prev = 0;
  let count = 0;

  for (let s of bank) {
    count = 0;

    for (let i = 0; i < s.length; i++) if (s[i] == "1") count++;

    if (count) {
      answer += prev * count;
      prev = count;
    }
  }

  return answer;
}
