function minPartitions(n: string): number {
  // minPartitions  -> Time { O(n), θ(n), Ω(1) } and Space { O(1), θ(1), Ω(1) }

  let maxValue: string = n[0];

  for (let i = 1; i < n.length; i++) {
    if (n[i] > maxValue) maxValue = n[i];
  }

  return parseInt(maxValue);
}
