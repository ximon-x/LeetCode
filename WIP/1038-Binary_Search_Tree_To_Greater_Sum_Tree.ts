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
  return root;
}

function increment(node: TreeNode | null): number {
  if (node === null) return 0;

  node.val += node.right ? node.right.val : 0;
  return 0;
}

// Wrong solution:
// Question is about increasing by all keys not by keys in the right section.
