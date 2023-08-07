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

function getTargetCopy(
  original: TreeNode | null,
  cloned: TreeNode | null,
  target: TreeNode | null
): TreeNode | null {
  // getTargetCopy  -> Time { O(log n), θ(log n), Ω(1) } and Space { O(2n), θ(2n), Ω(n) }

  if (original == null || original == target) return cloned;

  let result: TreeNode | null = getTargetCopy(
    original.left,
    cloned!.left,
    target
  );

  if (result != null) return result;
  return getTargetCopy(original.right, cloned!.right, target);
}
