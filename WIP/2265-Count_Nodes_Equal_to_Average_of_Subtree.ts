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
  if (root === null) return 0;

  let resultNodes: number = 0;
  const averageCalculator = (treeNode: TreeNode | null) => {
    if (treeNode === null) return;
  };

  return resultNodes;
}

// def averageOfSubtree(self, root: Optional[TreeNode]) -> int:
//         result = 0

//         def traverse(node):
//             nonlocal result

//             if not node:
//                 return 0, 0

//             left_sum, left_count = traverse(node.left)
//             right_sum, right_count = traverse(node.right)

//             s = node.val + left_sum + right_sum
//             c = 1 + left_count + right_count

//             if s // c == node.val:
//                 result += 1

//             return s, c

//         traverse(root)

//         return result
