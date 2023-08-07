function oddCells(m: number, n: number, indices: number[][]): number {
  // Time { O(n^2), θ(n^2), Ω(n^2) } and Space { O(n), θ(n), Ω(n) }

  let answer = 0;
  let matrix: number[][] = [];

  // Creating the matrix
  for (let i = 0; i < m; i++) {
    let row: number[] = [];
    for (let j = 0; j < n; j++) row.push(0);
    matrix.push(row);
  }

  for (let index of indices) {
    // Increment rows
    for (let i = 0; i < m; i++) {
      matrix[i][index[1]]++;
    }

    // Increment colums
    for (let j = 0; j < n; j++) {
      matrix[index[0]][j]++;
    }
  }

  // Count Odd Cells
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] % 2 !== 0) answer++;
    }
  }

  return answer;
}

