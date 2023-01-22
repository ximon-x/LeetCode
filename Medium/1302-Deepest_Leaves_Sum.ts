function deepestLeavesSum(root: TreeNode | null): number {
  // deepestLeavesSum -> Time { O(2^n), θ(2^n), Ω(2^n) } and Space { O(nm), θ(nm), Ω(nm) }

  if (root === null) return 0;

  let deepestLevel: number = -1;
  let result: number = 0;

  const deepestRootAdder = (level: number, node: TreeNode | null): void => {
    if (node === null) return;

    deepestRootAdder(level + 1, node.left);
    deepestRootAdder(level + 1, node.right);

    if (level > deepestLevel) {
      deepestLevel = level;
      result = 0;
    }

    if (deepestLevel === level) result += node.val;
  };

  deepestRootAdder(0, root);
  return result;
}
