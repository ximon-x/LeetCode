#include "./Linked_List_Node.cpp"

class Solution {
   public:
    bool isPalindrome(ListNode* head) {
        ListNode* slow = head;
        ListNode* fast = head;
        ListNode* prev = nullptr;
        ListNode* temp = nullptr;

        while (fast && fast->next) {
            slow = slow->next;
            fast = fast->next->next;
        }

        prev = slow;
        slow = slow->next;
        prev->next = nullptr;

        while (slow) {
            temp = slow->next;
            slow->next = prev;
            prev = slow;
            slow = temp;
        }

        fast = head;
        slow = prev;

        while (slow) {
            if (fast->val != slow->val) {
                return false;
            } else {
                fast = fast->next;
                slow = slow->next;
            }
        }

        return true;
    }
};
