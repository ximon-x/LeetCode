function averageOfSubtree(root: TreeNode | null): number {
  // dfs    -> Time { O(2^n), θ(2^n), Ω(n) } and Space { O(2n), θ(2n), Ω(2n) }

  let result = 0;

  function dfs(node) {
    if (node === null) return [0, 0];

    let [leftSum, leftCount] = dfs(node.left);
    let [rightSum, rightCount] = dfs(node.right);

    let sum = leftSum + rightSum + node.val;
    let count = leftCount + rightCount + 1;

    if (Math.floor(sum / count) == node.val) result++;
    return [sum, count];
  }

  dfs(root);

  return result;
}
