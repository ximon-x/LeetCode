function findWinners(matches: number[][]): number[][] {
  let result: number[][];

  let noLossWinners: number[] = [];
  let oneLossWinners: number[] = [];

  for (let i = 0; i < matches.length; i++) {
    let noLossCount = 0;
    let oneLossCount = 0;

    for (let j = 0; j < matches.length; j++) {
      // Test for no Loss
      if (matches[i][0] === matches[j][1]) {
        noLossCount++;
      }

      // Test for one Loss
      if (matches[i][1] === matches[j][1]) {
        oneLossCount++;
      }
    }

    if (noLossCount === 0 && !noLossWinners.includes(matches[i][0]))
      noLossWinners.push(matches[i][0]);

    if (oneLossCount === 1 && !oneLossWinners.includes(matches[i][1]))
      oneLossWinners.push(matches[i][1]);
  }

  result = [
    noLossWinners.sort((a, b) => a - b),
    oneLossWinners.sort((a, b) => a - b),
  ];

  return result;
}

// You also need to include those that have haven't won but have lost.
console.log(
  findWinners([
    [1, 3],
    [2, 3],
    [3, 6],
    [5, 6],
    [5, 7],
    [4, 5],
    [4, 8],
    [4, 9],
    [10, 4],
    [10, 9],
  ])
);
