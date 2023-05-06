function findDifference(nums1: number[], nums2: number[]): number[][] {
  // findDifference ->  Time { O(n+m), θ(n+m), Ω(n+m) } and Space { O(n+m), θ(n+m), Ω(1) }

  let set1 = new Set<number>();
  let set2 = new Set<number>();

  for (let i = 0; i < nums1.length; i++) {
    if (!nums2.includes(nums1[i])) {
      set1.add(nums1[i]);
    }
  }

  for (let j = 0; j < nums2.length; j++) {
    if (!nums1.includes(nums2[j])) {
      set2.add(nums2[j]);
    }
  }

  let answer: number[][] = [[...set1], [...set2]];
  return answer;
}
