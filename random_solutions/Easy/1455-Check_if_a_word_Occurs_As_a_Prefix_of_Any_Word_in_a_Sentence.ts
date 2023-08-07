function isPrefixOfWord(sentence: string, searchWord: string): number {
  // isPrefixOfWord   -> Time { O(n), θ(n), Ω(1) } and Space { O(1), θ(1), Ω(1) }

  const words: string[] = sentence.split(" ");

  for (let i = 0; i < words.length; i++) {
    if (words[i].startsWith(searchWord)) {
      return i + 1;
    }
  }

  return -1;
}
