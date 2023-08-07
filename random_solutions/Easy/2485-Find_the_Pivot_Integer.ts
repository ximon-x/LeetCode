function pivotInteger(n: number): number {
  // pivotInteger  -> Time { O(n), θ(n), Ω(1) } and Space { O(1), θ(1), Ω(1) }

  let answer = -1;

  const sum = (start: number, end: number) => {
    let res = 0;
    for (let i = start; i <= end; i++) {
      res += i;
    }
    return res;
  };

  for (let i = 1; i <= n; i++) {
    if (sum(1, i) === sum(i, n)) {
      return i;
    }
  }

  return answer;
}
