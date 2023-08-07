function countGoodRectangles(rectangles: number[][]): number {
  // Time { O(n), θ(n), Ω(n) } and Space { O(1), θ(1), Ω(1) }

  let answer = 0;
  let largestSquares: number[] = [];

  for (let rectangle of rectangles) {
    largestSquares.push(Math.min(...rectangle));
  }

  let maxSquare = Math.max(...largestSquares);
  answer = largestSquares.filter((x) => x === maxSquare).length;

  return answer;
}
