class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def mergeNodes(self, head: ListNode | None) -> ListNode | None:
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