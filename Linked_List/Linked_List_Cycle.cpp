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
        if (head == nullptr)
            return nullptr;

        ListNode* slow = head;
        ListNode* fast = head;

        // Checking to see if there is a cycle in the linked list.
        while (fast != nullptr && fast->next != nullptr) {
            slow = slow->next;
            fast = fast->next->next;

            cout << "Slow at node: " << slow << " with value: " << slow->val
                 << "\n";
            cout << "Fast at node: " << fast << " with value: " << fast->val
                 << "\n";

            if (slow == fast)
                break;

            cout << "\n";
        }

        // Checking to see if fast is a nullptr.
        if (slow != fast)
            return nullptr;

        cout << "\n";
        cout << "Met at node: " << slow << " with value: " << slow->val << "\n";
        cout << "\n\n";
        slow = head;

        // Using the Floyd's cycle-detection algorithm to pinpoint the node.
        while (slow != fast) {
            slow = slow->next;
            fast = fast->next;

            cout << "Slow at node: " << slow << " with value: " << slow->val
                 << "\n";
            cout << "Fast at node: " << fast << " with value: " << fast->val
                 << "\n";
        }

        cout << "\n";
        cout << "Cycle at node: " << slow << " with value: " << slow->val
             << "\n";
        cout << "\n\n";
        return slow;
    }
};

int main() {
    ListNode first = ListNode(3);
    ListNode second = ListNode(2);
    ListNode third = ListNode(0);
    ListNode fourth = ListNode(-4);

    first.next = &second;
    second.next = &third;
    third.next = &fourth;
    // fourth.next = &second;

    Solution solution{};

    bool hasCycle = solution.hasCycle(&first);
    ListNode* node = solution.detectCycle(&first);

    if (hasCycle) {
        cout << "The List has a cycle at node with address: " << node
             << " and value of: " << node->val << "\n";
    } else {
        cout << "The List has no cycle and a null pointer should be returned:"
             << node << "\n";
    }
}
