function diagonalSum(mat: number[][]): number {
  // diagonalSum  ->    Time { O(n^2), θ(n^2), Ω(n) } and Space { O(1), θ(1), Ω(1) }

  let answer: number = 0;

  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      // Primary diagonal
      if (i === j) {
        answer += mat[i][j];
      }

      // Secondary diagonal
      if (i !== j && i + j === mat[0].length - 1) {
        answer += mat[i][j];
      }
    }
  }

  return answer;
}
