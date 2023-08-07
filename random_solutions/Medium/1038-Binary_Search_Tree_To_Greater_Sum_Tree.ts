function bstToGst(root: TreeNode | null): TreeNode | null {
  // getSum   -> Time { O(2n), θ(2n), Ω(n) } and Space { O(n), θ(n), Ω(n) }

  const getSum = (node: TreeNode | null, sum) => {
    if (!node) return sum;

    node.val += getSum(node.right, sum);

    return getSum(node.left, node.val);
  };

  getSum(root, 0);
  return root;
}
