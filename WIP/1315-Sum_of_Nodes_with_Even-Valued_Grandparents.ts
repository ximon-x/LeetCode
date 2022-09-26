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
  let result: number = 0;

  function grandChildTraverse(node: TreeNode | null, depth: number): number {
    if (node === null) return 0;
    let sum: number = 0;

    sum += grandChildTraverse(node.left, depth + 1);

    return sum;
  }

  result += grandChildTraverse(root, 0);
  return result;
}

// Problem
// Return sum of grand parent nodes.

// Solution
// Check if a node is even,
// If it is even, perform a depth first search to be sure if has a node in the second generation as true.
// Return node if true
// Add node to result
// return result

// Specific problems
// 1. We need a way for a node to know if a grandchild exists.
// Specific solutions
// 2.
