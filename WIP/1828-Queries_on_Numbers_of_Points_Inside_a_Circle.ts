function countPoints(points: number[][], queries: number[][]): number[] {
  // countPoints  -> Time { O(n^2), θ(n^2), Ω(n) } and Space { O(n), θ(n), Ω(n) }

  let result: number[] = [];

  for (let i = 0; i < queries.length; i++) {
    let r: number = queries[i][2] ** 2;
    let insidePoints: number = 0;

    for (let j = 0; j < points.length; j++) {
      let xDistance: number = points[j][0] - queries[i][0];
      let yDistance: number = points[j][1] - queries[i][1];

      let d: number = xDistance ** 2 + yDistance ** 2;

      if (d <= r) insidePoints += 1;
    }

    result.push(insidePoints);
  }

  return result;
}
