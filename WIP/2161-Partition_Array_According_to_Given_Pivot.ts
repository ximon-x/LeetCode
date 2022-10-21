function pivotArray(nums: number[], pivot: number): number[] {
	let result: number[] = []
	result.push(pivot)

	for (let i = 0; i < nums.length; i++) {
		const pivotLocation = result.indexOf(pivot)

		if (nums[i] < pivot) result.splice(pivotLocation, 0, nums[i])

		else if (nums[i] > pivot) result.splice(pivotLocation + 1, 0, nums[i])

		else result.splice(pivotLocation, 0, nums[i])

	}
	result.splice
	return result
}
