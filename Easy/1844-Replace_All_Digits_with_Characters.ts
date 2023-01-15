function shift(c: string, x: number): string {
  // shift  -> Time { O(n), θ(n), Ω(1) } and Space { O(1), θ(1), Ω(1) }

  const alphabets = [...Array(26)].map((_, i) => String.fromCharCode(i + 97));
  let answer = "";

  const cNdx = alphabets.indexOf(c);
  const xNdx = cNdx + x;
  answer = alphabets[xNdx];

  return answer;
}

function replaceDigits(s: string): string {
  // replaceDigits  -> Time { O(n), θ(n), Ω(1) } and Space { O(1), θ(1), Ω(1) }

  let answer = "";

  for (let i = 0; i < s.length; i++) {
    if (i % 2 === 1) {
      answer += shift(s[i - 1], parseInt(s[i]));
    } else {
      answer += s[i];
    }
  }

  return answer;
}
