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

function averageOfSubtree(root: TreeNode | null): number {
  if (root === null) return 0;

  let resultNodes: number = 0;
  const averageCalculator = (treeNode: TreeNode) => {};

  return resultNodes;
}
