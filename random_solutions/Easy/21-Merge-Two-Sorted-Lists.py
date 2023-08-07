class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    # mergeTwoLists   -> Time { O(2n), θ(2n), Ω(1) } and Space { O(n), θ(n), Ω(1) }

    def mergeTwoLists(self, list1, list2):
        if list1 == None:
            return list2

        if list2 == None:
            return list1

        if list1.val < list2.val:
            list1.next = self.mergeTwoLists(list1.next, list2)
            return list1

        else:
            list2.next = self.mergeTwoLists(list1, list2.next)
            return list2
