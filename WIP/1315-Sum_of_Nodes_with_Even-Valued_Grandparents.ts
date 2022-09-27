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

function sumEvenGrandparent(root: TreeNode | null): number {
  return grandChildTraverse(root, 1, 1);
}

function grandChildTraverse(
  node: TreeNode | null,
  parent: number,
  grandParent: number
): number {
  if (node === null) return 0;

  return (
    grandChildTraverse(node.left, node.val, parent) +
    grandChildTraverse(node.right, node.val, parent) +
    (grandParent % 2 == 0 ? node.val : 0)
  );
}
