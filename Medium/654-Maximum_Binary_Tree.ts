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
	return buildTree(nums, 0, nums.length - 1);
};

function buildTree(nums: number[], left: number, right: number): TreeNode | null {
	if (left > right) return null;

	let max_index = left;
	for (let i = left; i <= right; i++) {
		if (nums[i] > nums[max_index]) max_index = i;
	}

	const root: TreeNode = new TreeNode(nums[max_index]);
	root.left = buildTree(nums, left, max_index - 1);
	root.right = buildTree(nums, max_index + 1, right);
	return root;

}        
