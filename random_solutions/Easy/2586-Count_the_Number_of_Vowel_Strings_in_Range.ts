function vowelStrings(words: string[], left: number, right: number): number {
  // Time { O(n), θ(n), Ω(n) } and Space { O(n), θ(n), Ω(n) }

  const vowels = ["a", "e", "i", "o", "u"];
  let answer = 0;

  for (let i = left; i <= right; i++) {
    const n = words[i].length - 1;
    const firstLetter = words[i][0];
    const lastLetter = words[i][n];

    if (vowels.includes(firstLetter) && vowels.includes(lastLetter)) answer++;
  }

  return answer;
}
