function uniquePaths(m: number, n: number): number {
  if (m == 1 || n == 1) return 1;
    m -= 1;
    n -= 1;
  
  if (m < n) {
    m = m + n;
    n = m - n;
    m = m - n;
  }

  let result: number = 1;
  let j = 1;
  
  for(let i = m+1; i <= m+n; i++, j++) {
    result *= i;
    result /= j;
  }

  return result;
}