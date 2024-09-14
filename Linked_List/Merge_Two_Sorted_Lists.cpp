
#include "./Linked_List_Node.cpp"

class Solution {
   public:
    ListNode* mergeTwoLists(ListNode* list1, ListNode* list2) {
        ListNode* p = list1;
        ListNode* q = list2;

        if (p == nullptr) {
            return q;
        }

        if (q == nullptr) {
            return p;
        }

        if (p->val < q->val) {
            p->next = this->mergeTwoLists(p->next, q);
            return p;
        } else {
            q->next = this->mergeTwoLists(p, q->next);
            return q;
        }
    }
};
