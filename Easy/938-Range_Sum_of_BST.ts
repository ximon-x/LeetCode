function rangeSumBST(root: TreeNode | null, low: number, high: number): number {
  let sum: number = 0;
  sum += traverse(root, low, high);
  return sum;
}

function traverse(node: TreeNode | null, low: number, high: number): number {
  if (node === null) return 0;

  let result = 0;
  result += traverse(node.left, low, high) + traverse(node.right, low, high);

  if (node.val <= high && node.val >= low) {
    result += node.val;
  }
  return result;
}
