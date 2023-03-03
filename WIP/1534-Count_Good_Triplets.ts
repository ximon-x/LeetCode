function countGoodTriplets(
  arr: number[],
  a: number,
  b: number,
  c: number
): number {
  let result = 0;

  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = i+1; j < arr.length - 1; j++ ) {

      if (Math.abs(arr[i] -arr[j]) <= a) {
        for (let k = j+1; k < arr.length; k++) {
          if (Math.abs(arr[j] - arr[k] <= b && Math.abs(arr[i] -arr[k]) <= c))
        }


      }
    }
  }

  return result;
}
