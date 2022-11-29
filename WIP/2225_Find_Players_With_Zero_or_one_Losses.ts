function findWinners(matches: number[][]): number[][] {
  let result: number[][];

  let winners: number[] = [];
  let losers: number[] = [];

  let noLossWinners: number[] = [];
  let oneLossWinners: number[] = [];

  for (let i = 0; i < matches.length; i++) {
    winners.push(matches[i][0]);
    losers.push(matches[i][1]);
  }

  for (let i = 0; i < winners.length; i++) {
    let count = 0;

    for (let j = 0; j < losers.length; j++) {
      if (winners[i] === losers[j]) {
        count++;
      }
    }

    switch (count) {
      case 0:
        noLossWinners.push(winners[i]);
      case 1:
        oneLossWinners.push(winners[i]);
    }
  }

  result = [noLossWinners, oneLossWinners];

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
