function reversePrefix(word: string, ch: string): string {
  // Time { O(n), θ(n), Ω(n) } and Space { O(n), θ(n), Ω(n) }

  let answer = "";

  if (word.includes(ch)) {
    const index = word.indexOf(ch);

    for (let i = index; i >= 0; i--) {
      answer += word[i];
    }

    for (let i = index + 1; i < word.length; i++) {
      answer += word[i];
    }
  } else return word;

  return answer;
}
