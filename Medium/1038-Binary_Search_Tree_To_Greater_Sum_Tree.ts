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

function bstToGst(root: TreeNode | null): TreeNode | null {
  const getSum = (node: TreeNode | null, sum) => {
    if (!node) return sum;

    node.val += getSum(node.right, sum);

    return getSum(node.left, node.val);
  };

  getSum(root, 0);
  return root;
}
