function uniquePaths(m: number, n: number): number {
  let memo: number = 0;

  const pathFinder = (i: number, j: number, memo: number): number => {
    if (i === 0 && j === 0) return memo;
    console.log("Returning 1");

    if (i !== 0) {
      memo += pathFinder(i - 1, j, memo);
    }

    if (j !== 0) {
      memo += pathFinder(i, j - 1, memo);
    }
    
    return memo;
  };

  memo = pathFinder(m, n, memo);
  return memo;
}

console.log(uniquePaths(3, 7));
