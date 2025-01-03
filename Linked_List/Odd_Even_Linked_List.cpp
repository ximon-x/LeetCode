#include "./Linked_List_Node.cpp"

class Solution {
   public:
    ListNode* oddEvenList(ListNode* head) {
        if (head == nullptr)
            return nullptr;

        ListNode* odd = head;
        ListNode* even = head->next;
        ListNode* evenHead = even;

        while (even != nullptr && even->next != nullptr) {
            odd->next = odd->next->next;
            even->next = even->next->next;

            odd = odd->next;
            even = even->next;
        }

        odd->next = evenHead;

        return head;
    }
};
