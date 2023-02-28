function sumOddLengthSubarrays(arr: number[]): number {
  // Time { O(n**3), θ(nlogn), Ω(n) } and Space { O(n**3), θ(nlogn), Ω(n) }
  let answer = 0;

  for (let i = 1; i <= arr.length; i += 2) {
    for (let j = 0; j < arr.length; j++) {
      let currArr: number[] = [];

      for (let k = j; k < j + i; k++) {
        if (k == arr.length) break;
        currArr.push(arr[k]);
      }

      if (currArr.length != i) break;

      for (let num of currArr) answer += num;
    }
  }

  return answer;
}
