#include "./Linked_List_Node.cpp"

class Solution {
   public:
    bool hasCycle(ListNode* head) {
        if (head == nullptr)
            return false;

        ListNode* slow = head;
        ListNode* fast = head->next;

        while (fast != nullptr) {
            fast = fast->next;

            if (fast == nullptr)
                return false;

            if (slow == fast)
                return true;

            slow = slow->next;
            fast = fast->next;
        }

        return false;
    }
};
