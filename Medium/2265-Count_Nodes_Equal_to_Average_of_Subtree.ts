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
