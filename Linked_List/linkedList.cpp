#include <cstddef>
#include <iostream>

using namespace std;

struct ListNode {
    int data;
    ListNode* next;

    ListNode(int value) {
        this->data = value;
        this->next = NULL;
    }

    void displayList() {
        ListNode* node = this;

        cout << "The List is [";
        while (node) {
            cout << " " << node->data;
            node = node->next;
        }

        cout << " ].\n";
    }
};

int main() {
    // Create 5 nodes.
    ListNode head = ListNode(15);
    ListNode second = ListNode(14);
    ListNode third = ListNode(9);
    ListNode fourth = ListNode(29);
    ListNode fifth = ListNode(88);

    // Link up the nodes to form a linked list.
    head.next = &second;
    second.next = &third;
    third.next = &fourth;
    fourth.next = &fifth;

    // Call helper method to display the old list elements.
    head.displayList();

    // To delete the third node, we simply have to set the next of the
    // node before the third node to the next of the third node.
    second.next = third.next;

    // Print out the modified array.
    head.displayList();
};
