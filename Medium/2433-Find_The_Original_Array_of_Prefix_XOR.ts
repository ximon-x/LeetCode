function findArray(pref: number[]): number[] {
	let result: number[] = [pref[0]]
	let prev_val: number = pref[0]


	for (let i = 1; i < pref.length; i++) {
		result.push(pref[i] ^ prev_val)
		prev_val = pref[i]
	}

	return result;
}
