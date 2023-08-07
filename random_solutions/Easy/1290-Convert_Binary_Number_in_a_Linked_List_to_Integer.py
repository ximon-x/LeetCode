class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    # getDecimalValue   -> Time { O(n), θ(n), Ω(1) } and Space { O(n), θ(n), Ω(1) }

    def getDecimalValue(self, head) -> int:
        answer = ""

        while head != None:
            answer += str(head.val)
            head = head.next

        return int(answer, 2)
