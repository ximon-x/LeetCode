function diagonalSort(mat: number[][]): number[][] {
  // diagonalSort   -> Time { O(n^2), θ(n^2), Ω(n) } and Space { O(n), θ(n), Ω(n) }

  interface rel {
    [key: number]: number[];
  }

  let diagonals: rel = {};
  let result: number[][] = mat;

  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      if (diagonals[i - j]) {
        diagonals[i - j].push(mat[i][j]);
        diagonals[i - j] = diagonals[i - j].sort((a, b) => {
          return a - b;
        });
      } else {
        diagonals[i - j] = [mat[i][j]];
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
