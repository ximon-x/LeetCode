class TreeNode {
	val: number;
	left: TreeNode | null;
	right: TreeNode | null;
	constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
		this.val = val === undefined ? 0 : val;
		this.left = left === undefined ? null : left;
		this.right = right === undefined ? null : right;
	}
}

let pre: number = 0;

function bstToGst(root: TreeNode | null): TreeNode | null {
	if (root.right != null) bstToGst(root.right);
	pre = root.val = pre + root.val;

	if (root.left != null) bstToGst(root.left);
	return root;
}
