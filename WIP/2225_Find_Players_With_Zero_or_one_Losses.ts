function findWinners(matches: number[][]): number[][] {
  let result: number[][];

  let noLossWinners: number[] = [];
  let oneLossWinners: number[] = [];

  for (let i = 0; i < matches.length; i++) {
    let losses = 0;
    for (let j = i + 1; j < matches.length; j++) {
      if (
        noLossWinners.includes(matches[i][0]) ||
        oneLossWinners.includes(matches[i][0])
      )
        continue;
      else {
      }
    }
  }

  result = [noLossWinners, oneLossWinners];

  return result;
}
