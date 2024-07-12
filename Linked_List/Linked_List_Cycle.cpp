#include "./Linked_List_Node.cpp"

class Solution {
   public:
    bool hasCycle(ListNode* head) {
        if (head == nullptr)
            return false;

        ListNode* slow = head;
        ListNode* fast = head;

        while (fast != nullptr && fast->next != nullptr) {
            slow = slow->next;
            fast = fast->next->next;

            if (slow == fast)
                return true;
        }

        return false;
    }

    ListNode* detectCycle(ListNode* head) {
        if (head == nullptr || head->next == nullptr)
            return nullptr;

        ListNode* slow = head;
        ListNode* fast = head;

        // Checking to see if there is a cycle in the linked list.
        while (fast != nullptr && fast->next != nullptr) {
            slow = slow->next;
            fast = fast->next->next;

            if (slow == fast)
                break;
        }

        // Checking to see if fast is a nullptr.
        if (slow != fast)
            return nullptr;

        slow = head;

        // Using the Floyd's cycle-detection algorithm to pinpoint the node.
        while (slow != fast) {
            slow = slow->next;
            fast = fast->next;
        }

        return slow;
    }
};
