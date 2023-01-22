function freqAlphabets(s: string): string {
  let answer = "";

  let alphabets = [...Array(26)].map((_, i) => String.fromCharCode(i + 97));

  while (s.length) {
    if (s.length < 3) {
      answer += alphabets[parseInt(s[0])];
    } else {
      if (s[2] === "#") {
      }
    }
  }

  return answer;
}
