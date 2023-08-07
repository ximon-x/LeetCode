function minTimeToVisitAllPoints(points: number[][]): number {
  // minTimeToVisitAllPoints   -> Time { O(n), θ(n), Ω(n) } and Space { O(1), θ(1), Ω(1) }

  let answer = 0;

  for (let i = 1; i < points.length; i++) {
    answer += Math.max(
      Math.abs(points[i][1] - points[i - 1][1]),
      Math.abs(points[i][0] - points[i - 1][0])
    );
  }

  return answer;
}
