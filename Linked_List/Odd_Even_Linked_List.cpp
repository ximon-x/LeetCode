#include "./Linked_List_Node.cpp"

class Solution {
   public:
    ListNode* oddEvenList(ListNode* head) {
        if (head == nullptr)
            return nullptr;

        if (head->next == nullptr) {
            return head;
        }

        ListNode* odd = head;
        ListNode* even = head->next;

        while (odd != nullptr || even != nullptr) {
            if (even != nullptr) {
                if (even->next != nullptr) {
                    even = even->next->next;
                } else {
                    even = even->next;
                }
            }

            if (odd != nullptr) {
                if (odd->next != nullptr) {
                    odd = odd->next->next;
                } else {
                    odd = odd->next;
                }
            }
        }
        return head;
    }
};

void testRegular(Solution* solution) {
    ListNode first = ListNode{1};
    ListNode second = ListNode{2};
    ListNode third = ListNode{3};
    ListNode fourth = ListNode{4};
    ListNode fifth = ListNode{5};

    first.next = &second;
    second.next = &third;
    third.next = &fourth;
    fourth.next = &fifth;

    first.displayList();
    ListNode* result = solution->oddEvenList(&first);
    result->displayList();
}

void testSingle(Solution* solution) {
    ListNode first = ListNode{1};
    first.displayList();

    ListNode* result = solution->oddEvenList(&first);
    result->displayList();
}

void testEmpty(Solution* solution) {
    ListNode* result = solution->oddEvenList(nullptr);
    result->displayList();
}

int main() {
    Solution solution{};

    testRegular(&solution);
    cout << "\n";

    testSingle(&solution);
    cout << "\n";

    testEmpty(&solution);
    cout << "\n";
}
