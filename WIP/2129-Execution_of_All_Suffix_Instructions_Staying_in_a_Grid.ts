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
            console.log(
              `Incrementing goodSteps by 1 because of "L" matches ${s[j]}, currPos is ${currPos}`
            );
          }
        }

        case "R": {
          currPos[1]++;
          if (currPos[1] > n - 1) {
            break;
          } else {
            goodSteps++;
            console.log(
              `Incrementing goodSteps by 1 because of "R" matches ${s[j]}, currPos is ${currPos}`
            );
          }
        }

        case "U": {
          currPos[0]--;
          if (currPos[0] < 0) {
            break;
          } else {
            goodSteps++;
            console.log(
              `Incrementing goodSteps by 1 because of "U" matches ${s[j]}, currPos is ${currPos}`
            );
          }
        }

        case "D": {
          currPos[0]++;
          if (currPos[0] > n - 1) {
            break;
          } else {
            goodSteps++;
            console.log(
              `Incrementing goodSteps by 1 because of "D" matches ${s[j]}, currPos is ${currPos}`
            );
          }
        }
      }
    }

    break;

    answer.push(goodSteps);
  }

  return answer;
}

console.log(executeInstructions(3, [0, 1], "RRDDLU"));
// Answer:  [ 4, 3, 3, 2, 1, 0 ]
// Expected:  [1, 5, 4, 3, 1, 0]
