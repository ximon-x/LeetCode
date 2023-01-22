function maxIncreaseKeepingSkyline(grid: number[][]): number {
  // maxIncreaseKeepingSkyline  -> Time { O(n^2), θ(n^2), Ω(2n) } and Space { O(1), θ(1), Ω(1) }

  let col: number[] = [];
  let row: number[] = [];

  for (let i = 0; i < grid.length; i++) {
    let rowMax = 0;
    row[i] = 0;

    for (let j = 0; j < grid[i].length; j++) {
      if (rowMax < grid[i][j]) {
        row[i] = grid[i][j];
        rowMax = grid[i][j];
      }
    }
  }

  for (let i = 0; i < grid.length; i++) {
    let colMax = 0;
    col[i] = 0;

    for (let j = 0; j < grid[i].length; j++) {
      if (colMax < grid[j][i]) {
        col[i] = grid[j][i];
        colMax = grid[j][i];
      }
    }
  }

  let ans = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      let diff = Math.min(row[i], col[j]) - grid[i][j];
      ans += diff;
    }
  }
  return ans;
}
