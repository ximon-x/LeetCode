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

class LinkedList {
    ListNode* head;
    int size;

   public:
    LinkedList() {
        this->head = nullptr;
        this->size = 0;
    }

    // Algorithm Analysis
    //      Time Complexity:     Ο(n) Ω(1)
    //      Space Complexity:    Ο(1) Ω(1) Θ(1)
    int get(int index) {
        if (index < 0 || index >= this->size) {
            cout << "Invalid Index"
                 << "\n";
            return -1;
        }

        ListNode* curr = this->head;

        for (int i = 0; i < index; i++) {
            curr = curr->next;
        }

        cout << "The value at index " << index << " is " << curr->val << "\n";
        return curr->val;
    }

    // Algorithm Analysis
    //      Time Complexity:     Ο(1) Ω(1) Θ(1)
    //      Space Complexity:    Ο(1) Ω(1) Θ(1)
    void addAtHead(int val) {
        // C++ compiler reuses the same memory address on the stack when the
        // function returns, by using the "new" keyword, the object is created
        // on the heap.
        ListNode* newNode = new ListNode{val};

        newNode->next = this->head;
        this->head = newNode;

        this->size++;
    }

    // Algorithm Analysis
    //      Time Complexity:     Ο(n) Ω(1)
    //      Space Complexity:    Ο(1) Ω(1) Θ(1)
    void addAtTail(int val) {
        if (this->size == 0) {
            this->addAtHead(val);
            return;
        }

        ListNode* newNode = new ListNode{val};

        ListNode* curr = this->head;

        while (curr->next != nullptr) {
            curr = curr->next;
        }

        curr->next = newNode;
        this->size++;
    }

    // Algorithm Analysis
    //      Time Complexity:     Ο(n) Ω(1)
    //      Space Complexity:    Ο(1) Ω(1) Θ(1)
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

        this->size++;
    }

    // Algorithm Analysis
    //      Time Complexity:     Ο(n) Ω(1)
    //      Space Complexity:    Ο(1) Ω(1) Θ(1)
    void deleteAtIndex(int index) {
        if (index < 0 || index >= this->size)
            return;

        if (index == 0) {
            ListNode* temp = this->head;
            this->head = this->head->next;
            delete temp;
            this->size--;
            return;
        }

        ListNode* curr = this->head;

        for (size_t i = 0; i < index - 1; i++) {
            curr = curr->next;
        }

        ListNode* temp = curr->next;
        curr->next = curr->next->next;
        delete temp;

        this->size--;
    }

    // Algorithm Analysis
    //      Time Complexity:     Ο(n) Ω(1)
    //      Space Complexity:    Ο(1) Ω(1) Θ(1)
    void displayList() {
        ListNode* node = this->head;

        cout << "The List is [ ";
        while (node) {
            cout << node->val << " -> ";
            node = node->next;
        }

        cout << "nullptr ].\n";
    }

    // Algorithm Analysis
    //      Time Complexity:     Ο(n) Ω(1)
    //      Space Complexity:    Ο(1) Ω(1) Θ(1)
    void displayNodeAddresses() {
        ListNode* node = this->head;

        cout << "The Addresses of the nodes are [ ";
        while (node) {
            cout << &(*node) << " -> ";
            node = node->next;
        }

        cout << "nullptr ].\n";
    }

    ~LinkedList() {
        ListNode* node = this->head;

        while (node) {
            ListNode* temp = node;
            node = node->next;

            delete temp;
        }

        cout << "Cleaned up memory" << endl;
    }
};
