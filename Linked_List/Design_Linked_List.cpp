#include <cstddef>
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
        if (this->head == nullptr)
            return -1;

        if (index >= this->size)
            return -1;

        ListNode* curr = this->head;

        for (int i = 0; i < this->size - 1; i++) {
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

        while (curr) {
            curr = curr->next;
        }
    }

    void addAtIndex(int index, int val) {}

    void deleteAtIndex(int index) {}

    void displayList() {
        ListNode* node = this->head;

        cout << "The List is [";
        while (node) {
            cout << " " << node->val;
            node = node->next;
        }

        cout << " ].\n";
    }
};

int main() {
    MyLinkedList linkedList = MyLinkedList();

    linkedList.addAtHead(1);
    linkedList.displayList();

    linkedList.addAtHead(5);
    linkedList.displayList();

    linkedList.addAtHead(7);
    linkedList.displayList();

    linkedList.addAtTail(3);
    linkedList.displayList();

    linkedList.addAtIndex(1, 2);
    linkedList.displayList();

    int val = linkedList.get(0);
    cout << "Retrieved at index 0: " << val << ".\n";

    int newVal = linkedList.get(2);
    cout << "Retrieved at index 2: " << newVal << ".\n";
}
