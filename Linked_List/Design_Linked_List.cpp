#include <cstddef>
#include <cstdlib>
#include <cstring>
#include <iostream>

using namespace std;

class ListNode {
   public:
    int val;
    ListNode* next;

    ListNode(int value) {
        this->val = value;
        this->next = nullptr;
    }
};

class MyLinkedList {
    ListNode* head;
    int size;

   public:
    MyLinkedList() {
        this->head = nullptr;
        this->size = 0;
    }

    int get(int index) {
        if (index < 0 || index >= this->size)
            return -1;

        ListNode* curr = this->head;

        for (int i = 0; i < index; i++) {
            curr = curr->next;
        }

        return curr->val;
    }

    void addAtHead(int val) {
        // C++ compiler reuses the same memory address on the stack when the
        // function returns, by using the "new" keyword, the object is created
        // on the heap.
        ListNode* newNode = new ListNode{val};

        newNode->next = this->head;
        this->head = newNode;

        this->size++;
    }

    void addAtTail(int val) {
        ListNode* newNode = new ListNode{val};

        ListNode* curr = this->head;

        while (curr->next != nullptr) {
            curr = curr->next;
        }

        curr->next = newNode;
    }

    void addAtIndex(int index, int val) {
        if (index < 0 || index > this->size)
            return;

        if (index == 0) {
            this->addAtHead(val);
            return;
        }

        if (index == this->size) {
            this->addAtTail(val);
            return;
        }

        ListNode* newNode = new ListNode{val};
        ListNode* curr = this->head;

        for (size_t i = 0; i < index - 1; i++) {
            curr = curr->next;
        }

        newNode->next = curr->next;
        curr->next = newNode;
    }

    void deleteAtIndex(int index) {
        if (index < 0 || index >= this->size)
            return;

        if (index == 0) {
            ListNode* temp = this->head;
            this->head = this->head->next;
            delete temp;
            return;
        }

        ListNode* curr = this->head;

        for (size_t i = 0; i < index - 1; i++) {
            curr = curr->next;
        }

        ListNode* temp = curr->next;
        curr->next = curr->next->next;
        delete temp;
    }

    void displayList() {
        ListNode* node = this->head;

        cout << "The List is [ ";
        while (node) {
            cout << node->val << " -> ";
            node = node->next;
        }

        cout << "nullptr ].\n";
    }

    void displayNodeAddresses() {
        ListNode* node = this->head;

        cout << "The Addresses of the nodes are [ ";
        while (node) {
            cout << &(*node) << " -> ";
            node = node->next;
        }

        cout << "nullptr ].\n";
    }

    // ~MyLinkedList() {
    //     ListNode* node = this->head;
    //
    //     while (node) {
    //         ListNode* temp = this->head;
    //         temp = node;
    //         node = node->next;
    //
    //         delete temp;
    //     }
    // }
};

int main() {
    MyLinkedList myLinkedList{};

    myLinkedList.addAtHead(1);
    myLinkedList.displayList();  // linked list: 1

    myLinkedList.addAtTail(3);
    myLinkedList.displayList();  // linked list: 1 -> 3

    myLinkedList.addAtIndex(1, 2);
    myLinkedList.displayList();  // linked list: 1 -> 2 -> 3

    cout << "Retrieved at index 1: " << myLinkedList.get(1)
         << ".\n";  // return 2

    myLinkedList.deleteAtIndex(1);
    myLinkedList.displayList();  // linked list: 1 -> 3

    cout << "Retrieved at index 1: " << myLinkedList.get(1)
         << ".\n";  // return 3

    cout << "\n\n"
         << "=================================================================="
         << "\n\n";

    MyLinkedList linkedList = MyLinkedList();

    linkedList.addAtHead(1);  // [1]
    linkedList.displayList();

    linkedList.addAtHead(5);  // [5, 1]
    linkedList.displayList();

    linkedList.addAtHead(7);  // [7, 5, 1]
    linkedList.displayList();

    linkedList.addAtTail(3);  // [7, 5, 1, 3]
    linkedList.displayList();

    linkedList.addAtIndex(1, 2);  // [7, 2, 5, 1, 3]
    linkedList.displayList();

    linkedList.deleteAtIndex(0);  // [2, 5, 1, 3]
    linkedList.displayList();

    linkedList.deleteAtIndex(1);  // [2, 1, 3]
    linkedList.displayList();

    linkedList.displayNodeAddresses();

    int newVal = linkedList.get(0);
    cout << "Retrieved at index 0: " << newVal << ".\n";
}
