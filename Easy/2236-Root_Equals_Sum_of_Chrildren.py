class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    # checkTree    -> Time { O(1), θ(1), Ω(1) } and Space { O(1), θ(1), Ω(1) }

    def checkTree(self, root) -> bool:
        return root.val == root.left.val + root.right.val
