function minOperations(boxes: string): number[] {
  let result: number[] = [];

  for (let i = 0; i < boxes.length; i++) {
    let operations: number = 0;

    for (let j = 0; j < boxes.length; j++) {
      operations = Math.abs(parseInt(boxes[i]) - parseInt(boxes[j]));
    }

    result.push(operations);
  }

  return result;
}

// Input: boxes = "110";
// Output: [1, 1, 3];

// Input: boxes = "001011"
// Output: [11,8,5,4,3,4]

// Problem: For each iteration, move all balls into that current box.

// Solution:
// 1. Declare result
// 2. Initialize a nested loop (n ** 2)

// 3. For i in boxes:
// 4.   Declare operations
// 5.   Declare ballsInBox

// 5.   For j in boxes:
// 6.     if box[j] != 0
// 6.     operations += Abs(i -j)
// 7.   Add operations to result

// 8. Return result

// Uncertainty:
// 1. Does moving all balls into a box for the current iteration affect the next iteration. It does.
