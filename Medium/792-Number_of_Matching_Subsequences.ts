function numMatchingSubseq(s: string, words: string[]): number {
  // isSubsequence  -> Time { O(n^2), θ(n^2), Ω(2n) } and Space { O(1), θ(1), Ω(1) }

  const isSubsequence = (s: string, word: string) => {
    if (s.length < word.length) return false;
    if (s.length === word.length) return s === word;

    for (const char of word) {
      const idx = s.indexOf(char);
      if (idx === -1) return false;
      s = s.substring(idx + 1);
    }

    return true;
  };

  return words.filter((word) => isSubsequence(s, word)).length;
}
