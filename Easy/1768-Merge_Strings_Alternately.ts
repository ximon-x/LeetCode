function mergeAlternately(word1: string, word2: string): string {
  // mergeAlternately  -> Time { O(n), θ(n), Ω(1) } and Space { O(n), θ(n), Ω(1) }
  let answer = "";

  let len1 = word1.length;
  let len2 = word2.length;

  for (let i = 0; i < Math.max(len1, len2); i++) {
    if (i < len1) answer += word1[i];
    if (i < len2) answer += word2[i];
  }

  return answer;
}
