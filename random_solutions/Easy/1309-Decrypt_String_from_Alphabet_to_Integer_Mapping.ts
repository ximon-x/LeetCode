function freqAlphabets(s: string): string {
  let answer = "";

  let alphabets = [...Array(26)].map((_, i) => String.fromCharCode(i + 97));

  while (s.length) {
    if (s.length < 3) {
      answer += alphabets[parseInt(s[0]) - 1];
      s = s.slice(1);
    } else {
      if (s[2] === "#") {
        answer += alphabets[parseInt(s.slice(0, 2)) - 1];
        s = s.slice(3);
      } else {
        answer += alphabets[parseInt(s[0]) - 1];
        s = s.slice(1);
      }
    }
  }

  return answer;
}
