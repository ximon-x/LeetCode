function firstPalindrome(words: string[]): string {
  for (let word of words) {
    let isPalindrome = true;
    let n = word.length;

    for (let i = 0; i < n; i++) {
      if (word[i] != word[n - i - 1]) isPalindrome = false;
    }

    if (isPalindrome) return word;
  }

  return "";
}
