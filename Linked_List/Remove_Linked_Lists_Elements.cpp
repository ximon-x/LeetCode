#include "./Linked_List_Node.cpp"

class Solution {
   public:
    ListNode* removeElements(ListNode* head, int val) {
        if (head == nullptr)
            return nullptr;

        while (head != nullptr && head->val == val) {
            head = head->next;
        }

        if (head == nullptr)
            return nullptr;

        ListNode* p = head;
        ListNode* q = head;
        ListNode* r = nullptr;

        while (p != nullptr) {
            r = p->next;

            if (p->val != val) {
                q->next = p;
                q = q->next;
            }

            if (r == nullptr) {
                q->next = nullptr;
            }

            p = r;
        }

        return head;
    }
};
