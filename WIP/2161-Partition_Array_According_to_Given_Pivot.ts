function pivotArray(nums: number[], pivot: number): number[] {
    let result: number[] = []
	result.push(pivot)

	for (let i = 0; i < nums.length; i++) {
		const pivotLocation = result.indexOf(pivot)

		if (nums[i] < pivot) result.splice(pivotLocation, 0, nums[i])

		else if (nums[i] > pivot) result.push(nums[i])

		else result.splice(pivotLocation, 0, nums[i])

	}

	const pivotIndex = result.indexOf(pivot)
	result.splice(pivotIndex, 1)

	return result
}
