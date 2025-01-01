#include "./Linked_List_Node.cpp"

class Solution {
   public:
    // Algorithm Analysis
    //      Time Complexity:    Ο(n)    Ω(n)    Θ(n)
    //      Space Complexity:   Ο(1)    Ω(1)    Θ(1)
    ListNode* rotateRight(ListNode* head, int k) {
        if (head == nullptr)
            return nullptr;

        // Variables for traversing the list.
        ListNode* p = head;  // New Head
        ListNode* q = head;  // Holds the tail
        uint n = 1;

        // Convert list into a bounded list and Get the number of elements in
        // the list.
        while (q->next != nullptr) {
            q = q->next;
            n++;
        }

        q->next = head;

        // Update the value of K to prevent needless multiple iterations over
        // the list.
        k %= n;

        // Find the node that needs to become the end. It would be at position
        // n - k.
        if (k != 0) {
            for (auto i = 0; i < n - k; i++) {
                q = q->next;
            }
        }

        // Make the target tail node the head node and reconvert list to a
        // singly linked list.
        p = q->next;
        q->next = nullptr;
        return p;
    }
};
