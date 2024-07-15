#include "./Linked_List_Node.cpp"

class Solution {
   public:
    ListNode* getIntersectionNode(ListNode* headA, ListNode* headB) {
        if (headA == nullptr || headB == nullptr)
            return nullptr;

        ListNode* p = headA;
        ListNode* q = headB;

        while (p != q) {
            p = p == nullptr ? headB : p->next;
            q = q == nullptr ? headA : q->next;
        }

        return p;
    }
};
