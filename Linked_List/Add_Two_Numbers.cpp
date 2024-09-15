#include "./Linked_List_Node.cpp"

class Solution {
   public:
    // Algorithm Analysis
    //      Time Complexity:     Ο(m+n) Ω(m+n)  Θ(m+n)
    //      Space Complexity:    Ο(1)   Ω(1)    Θ(1)
    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
        ListNode preHead = ListNode{0};
        ListNode* p = &preHead;
        int carry = 0;

        while (l1 || l2 || carry) {
            int a = l1 ? l1->val : 0;
            int b = l2 ? l2->val : 0;
            carry += a + b;

            p->next = new ListNode(carry % 10);
            carry /= 10;

            if (l1)
                l1 = l1->next;

            if (l2)
                l2 = l2->next;

            p = p->next;
        }

        return preHead.next;
    }
};
