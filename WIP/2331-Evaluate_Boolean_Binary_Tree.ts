let numBinMap = new Map<number, string | boolean>([
  [0, true],
  [1, false],
]);

function evaluateTree(root: TreeNode | null): boolean {
  if (!root) return false;
  if (root.val == 0) return true;
  if (root.val == 1) return false;

  let answer: boolean;

  answer = evaluator(root);
  return answer;
}

function evaluator(node: TreeNode): boolean {
  if (!node) return false;

  if (node.val == 0) {
    return true;
  } else if (node.val == 1) {
    return false;
  } else if (node.val == 2) {
    let left = evaluator(node.left!);
    let right = evaluator(node.right!);

    return left || right;
  } else if (node.val == 3) {
    let left = evaluator(node.left!);
    let right = evaluator(node.right!);

    return left && right;
  }

  return true;
}
