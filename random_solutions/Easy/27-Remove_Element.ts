function removeElement(nums: number[], val: number): number {
  // removeElement   -> Time { O(n), θ(n), Ω(n) } and Space { O(n), θ(n), Ω(n) }

  let k = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == val) {
      // @ts-ignore: Storing a string in an integer array
      nums[i] = "_";
    } else k++;
  }

  nums.sort();

  return k;
}
