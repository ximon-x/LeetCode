function numMatchingSubseq(s: string, words: string[]): number {
  if (s.length == 0) return 0;
  subseq = 0;
  
  for (word in words) {
    for (i = 0; i < s.length; i++) {
      if (s[i] == word[0] && i != s.length-1) {
        subset += verifySubseq(s.slice(i+1), word.slice(1))
      }
    }
  }
  
  return subseq;
}

function verifySubseq(supseq: string, word: string): number {
  
}


// Loop through supseq and check if word[0] is present
// if present and i!=s.length-1, 
// return verifySubseq(s.slice(i+1), word.slice(1))
// return 0