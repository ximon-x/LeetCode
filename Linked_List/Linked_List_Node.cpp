#include <cstddef>
#include <iostream>

using namespace std;

struct ListNode {
    int val;
    ListNode* next;

    ListNode(int value) {
        this->val = value;
        this->next = NULL;
    }

    void displayList() {
        ListNode* node = this;

        cout << "The List is [";
        while (node) {
            cout << " " << node->val;
            node = node->next;
        }

        cout << " ].\n";
    }
};
