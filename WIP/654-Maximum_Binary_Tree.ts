class TreeNode {
	val: number
	left: TreeNode | null
	right: TreeNode | null
	constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
		this.val = (val === undefined ? 0 : val)
		this.left = (left === undefined ? null : left)
		this.right = (right === undefined ? null : right)
	}
}


function constructMaximumBinaryTree(nums: number[]): TreeNode | null {
	let result: TreeNode;

	result = buildTree(nums)
	return result
};

function buildTree(num: number[]): TreeNode | null {
	if (num.length === 0) return null;

	const maxIndex = num.indexOf(Math.max(...num))
	let tree: TreeNode

	tree.val = num[maxIndex]
	tree.right = buildTree(num.slice(maxIndex + 1))
	tree.left = buildTree(num.slice(0, maxIndex))

	return tree
}
