function garbageCollection(garbage: string[], travel: number[]): number {
  // lastIdx    -> Time { O(2^n), θ(2^n), Ω(n) } and Space { O(2n), θ(2n), Ω(2n) }

  const type = ["G", "P", "M"];

  let total = garbage.join("").length;

  const lastIdx = (g) => {
    let idx = 0;
    for (let i = garbage.length - 1; i >= 0; i--) {
      if (garbage[i].includes(g)) {
        idx = i;
        return idx;
      }
    }
  };

  type.map((g) => {
    total += [...travel].splice(0, lastIdx(g)).reduce((c, a) => c + a, 0);
  });

  return total;
}
