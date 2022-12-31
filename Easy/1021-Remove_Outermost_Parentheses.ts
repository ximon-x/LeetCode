function removeOuterParentheses(s: string): string {
  // removeOuterParentheses  -> Time { O(n), θ(n), Ω(1) } and Space { O(n), θ(n), Ω(1) }
  let result: string = "";
  let pointer: number = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" && pointer === 0) {
      pointer++;
    } else if (s[i] === ")" && pointer === 1) {
      pointer--;
    } else if (s[i] === "(" && pointer !== 0) {
      result += s[i];
      pointer++;
    } else {
      result += s[i];
      pointer--;
    }
  }

  return result;
}
