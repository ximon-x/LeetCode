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

let result: number = 0;

function averageOfSubtree(root: TreeNode | null): number {
  dfs(root);
  return result;
}

function dfs(node: TreeNode | null): number[] {
  if (node == null) {
    return [0, 0];
  }

  let left: number[] = dfs(node.left);
  let right: number[] = dfs(node.right);

  let currSum: number = left[0] + right[0] + node.val;
  let currCount: number = left[1] + right[1] + 1;

  if (currSum / currCount == node.val) {
    result += 1;
  }

  return [currSum, currCount];
}
