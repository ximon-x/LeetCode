function minOperations(n: number): number {
	let arr: number[] = [];
	let midIndex = 0;
	let result = 0;
	let mid = 0;
	let i = 1;

	while (arr.length != n) {
		arr.push(i);
		i += 2;
	}

	if (arr.length % 2 === 1) {
		midIndex = (arr.length - 1) / 2
		mid = arr[midIndex]
	} else {
		midIndex = (arr.length) / 2
		mid = arr[midIndex] - 1
	}

	for (let i = 0; arr[i] < mid; i++) {
		result += mid - arr[i]
	}

	return result
}

console.log(minOperations(6))
