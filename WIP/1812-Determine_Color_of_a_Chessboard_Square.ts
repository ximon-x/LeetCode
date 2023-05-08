function squareIsWhite(coordinates: string): boolean {
  let filesMap = new Map<string, number>([
    ["a", 1],
    ["b", 2],
    ["c", 3],
    ["d", 4],
    ["e", 5],
    ["f", 6],
    ["g", 7],
    ["h", 8],
  ]);

  let rank = parseInt(coordinates[1]);
  let file = filesMap.get(coordinates[0])!;

  if (file % 2 == 1) {
    if (rank % 2 == 1) {
      return false;
    } else return true;
  } else {
    if (rank % 2 == 0) {
      if (rank % 2 == 0) {
        return false;
      } else return true;
    }
  }

  return false;
}

console.log(squareIsWhite("h3"));
