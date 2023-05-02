function findDelayedArrivalTime(
  arrivalTime: number,
  delayedTime: number
): number {
  // findDelayedArrivalTime -> Time { O(1), θ(1), Ω(1) } and Space { O(1), θ(1), Ω(1) }

  return (arrivalTime + delayedTime) % 24;
}
