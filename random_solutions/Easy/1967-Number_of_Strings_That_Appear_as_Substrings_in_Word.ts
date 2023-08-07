function numOfStrings(patterns: string[], word: string): number {
  // numOfStrings  -> Time { O(n), θ(n), Ω(1) } and Space { O(1), θ(1), Ω(1) }

  let answer = 0;

  for (let pattern of patterns) {
    if (word.indexOf(pattern) !== -1) {
      answer++;
    }
  }

  return answer;
}
