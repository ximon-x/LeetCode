class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def getAllElements(self, root1: TreeNode, root2: TreeNode) -> list[int]:
        answer = []

        list_1 = traverseTree(root1, [])
        list_2 = traverseTree(root2, [])

        answer.extend(list_1)
        answer.extend(list_2)

        answer.sort()

        return answer


def traverseTree(node, list):
    if not node:
        return []

    traverseTree(node.left, list)
    if type(node.val) == int:
        list.append(node.val)

    traverseTree(node.right, list)

    return list
