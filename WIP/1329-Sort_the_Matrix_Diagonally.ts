function diagonalSort(mat: number[][]): number[][] {
  interface rel {
    [key: number]: number[];
  }

  let diagonals: rel = {};
  let result: number[][] = mat;

  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      if (diagonals[i - j]) {
        diagonals[i - j].push(mat[i][j]);
        diagonals[i - j].sort();
      } else {
        diagonals[i - j] = [mat[i][j]];
        diagonals[i - j].sort();
      }
    }
  }

  console.log(diagonals);

  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      result[i][j] = diagonals[i - j].shift() as number;
    }
  }

  console.log(result);

  return result;
}

diagonalSort([
  [11, 25, 66, 1, 69, 7],
  [23, 55, 17, 45, 15, 52],
  [75, 31, 36, 44, 58, 8],
  [22, 27, 33, 25, 68, 4],
  [84, 28, 14, 11, 5, 50],
]);
