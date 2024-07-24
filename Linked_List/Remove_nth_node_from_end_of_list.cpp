#include "./Linked_List_Node.cpp"

class Solution {
   public:
    ListNode* removeNthFromEnd(ListNode* head, int n) {
        if (head == nullptr || head->next == nullptr)
            return nullptr;

        ListNode* p = head;
        ListNode* q = head;

        for (size_t i = 0; i < n; i++) {
            p = p->next;
        }

        if (p == nullptr) {
            return head->next;
        }

        while (p->next != nullptr) {
            p = p->next;
            q = q->next;
        }

        q->next = q->next->next;
        return head;
    }
};
