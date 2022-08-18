class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def mergeNodes(self, head: ListNode | None) -> ListNode | None:
        # mergeNodes    -> Time { O(2^n), θ(2^n), Ω(n) } and Space { O(2n), θ(2n), Ω(2n) }

        if head.next is None:
            return None
        
        start = head.next
        curr_sum = 0;

        while start.val != 0:
            curr_sum += start.val
            start = start.next
        
        head.val = curr_sum
        head.next = self.mergeNodes(start)
        
        return head