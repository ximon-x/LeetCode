function deleteGreatestValue(grid: number[][]): number {
  let answer = 0;

  for (let i = 0; i < grid.length; i++) {
    grid[i].sort((a, b) => a - b);
  }

  while (grid[0].length !== 0) {
    let maxNums: number[] = [];

    // Iterate through each array
    for (let i = 0; i < grid.length; i++) {
      maxNums.push(grid[i].pop()!);
    }

    console.log(maxNums);

    answer += Math.max(...maxNums);
  }

  console.log(answer);
  return answer;
}
