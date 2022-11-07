function executeInstructions(
  n: number,
  startPos: number[],
  s: string
): number[] {
  let answer: number[] = [];

  for (let i = 0; i < s.length; i++) {
    let currPos = startPos;
    let goodSteps = 0;

    for (let j = i; j < s.length; j++) {
      switch (s[j]) {
        case "L": {
          currPos[1]--;
          if (currPos[1] < 0) {
            break;
          } else {
            goodSteps++;
          }
        }

        case "R": {
          currPos[1]++;
          if (currPos[1] > n - 1) {
            break;
          } else {
            goodSteps++;
          }
        }

        case "U": {
          currPos[0]--;
          if (currPos[0] < 0) {
            break;
          } else {
            goodSteps++;
          }
        }

        case "D": {
          currPos[0]--;
          if (currPos[0] > n - 1) {
            break;
          } else {
            goodSteps++;
          }
        }
      }
    }

    answer.push(goodSteps);
  }

  return answer;
}

console.log(executeInstructions(3, [0, 1], "RRDDLU"));
