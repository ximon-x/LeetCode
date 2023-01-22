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
