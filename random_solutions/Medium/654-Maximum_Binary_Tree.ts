function constructMaximumBinaryTree(nums: number[]): TreeNode | null {
  // buildTree  -> Time { O(2^n), θ(2^n), Ω(1) } and Space { O(1), θ(1), Ω(1) }
  return buildTree(nums, 0, nums.length - 1);
}

function buildTree(
  nums: number[],
  left: number,
  right: number
): TreeNode | null {
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
