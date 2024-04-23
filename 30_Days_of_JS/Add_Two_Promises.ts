type P = Promise<number>;

// Algorithm Analysis
//      Time Complexity:     Ο(1) Ω(1) Θ(1)
//      Space Complexity:    Ο(1) Ω(1) Θ(1)

async function addTwoPromises(promise1: P, promise2: P): P {
  return (await promise1) + (await promise2);
}
