#include <iostream>
using namespace std;

class Node {
   public:
    int value;
    Node* next;
    Node* prev;

    Node(int value) {
        this->value = value;

        this->next = nullptr;
        this->prev = nullptr;
    }
};

class MyLinkedList {
    int size;

    Node* head;
    Node* tail;

   public:
    MyLinkedList() {
        this->size = 0;
        this->head = nullptr;
        this->tail = nullptr;
    }

    // Algorithm Analysis
    //      Time Complexity:     Ο(m+n) Θ(1)
    //      Space Complexity:    Ο(1) Ω(1) Θ(1)
    int get(int index) {
        if (this->size == 0 || this->size <= index)
            return -1;

        Node* curr = this->head;

        while (index != 0) {
            curr = curr->next;
            index--;
        }

        return curr->value;
    }

    // Algorithm Analysis
    //      Time Complexity:     Ο(1) Ω(1) Θ(1)
    //      Space Complexity:    Ο(1) Ω(1) Θ(1)
    void addAtHead(int value) {
        Node* newNode = new Node{value};

        if (this->size == 0) {
            this->head = newNode;
            this->tail = newNode;
            this->size++;
            return;
        }

        Node* prevHead = this->head;
        prevHead->prev = newNode;

        this->head = newNode;
        this->head->next = prevHead;

        this->size++;
    }

    // Algorithm Analysis
    //      Time Complexity:     Ο(1) Ω(1) Θ(1)
    //      Space Complexity:    Ο(1) Ω(1) Θ(1)
    void addAtTail(int value) {
        Node* newNode = new Node{value};

        if (this->size == 0) {
            this->head = newNode;
            this->tail = newNode;
            this->size++;
            return;
        }

        Node* prevTail = this->tail;
        prevTail->next = newNode;

        this->tail = newNode;
        this->tail->prev = prevTail;

        this->size++;
    }

    // Algorithm Analysis
    //      Time Complexity:     Ο(n) Θ(1)
    //      Space Complexity:    Ο(1) Ω(1) Θ(1)
    void addAtIndex(int index, int value) {
        if (index > this->size) {
            return;
        }

        if (index == 0) {
            this->addAtHead(value);
            return;
        }

        if (index == this->size) {
            this->addAtTail(value);
            return;
        }

        Node* newNode = new Node{value};
        Node* curr = this->head;

        // Accounting for Zero-indexing
        index--;

        while (index != 0) {
            curr = curr->next;
            index--;
        }

        Node* nextNode = curr->next;
        newNode->next = nextNode;
        curr->next = newNode;

        nextNode->prev = newNode;
        newNode->prev = curr;

        this->size++;
    }

    // Algorithm Analysis
    //      Time Complexity:     Ο(n) Θ(1)
    //      Space Complexity:    Ο(1) Ω(1) Θ(1)
    void deleteAtIndex(int index) {
        if (index >= size) {
            return;
        }

        // Accounting for Zero Indexing
        index--;

        Node* curr = this->head;

        while (index != 0) {
            curr = curr->next;
            index--;
        }

        if (curr == this->head) {
            // We move the head to the second node in the list.
            this->head = curr->next;

            // We then set the previous of the new head to a nullptr as long the
            // new head isn't a nullptr.
            if (this->head != nullptr) {
                this->head = nullptr;
            }
        }

        else if (curr == this->tail) {
            // We move the tail to second-to-last node in the list.
            this->tail = curr->prev;

            // We then set the next of the new tail to a nullptr as long as the
            // new tail isn't a nullptr.
            if (this->tail != nullptr) {
                this->tail->next = nullptr;
            }
        }

        else {
            // We set the next property of the previous node of current node
            // which is actually pointing to curr to the next of curr.
            curr->prev->next = curr->next;

            // We set the prev property of the next node of current node to the
            // prev of curr.
            curr->next->prev = curr->prev;
        }

        delete curr;
        this->size--;
    }

    void displayList() {
        Node* node = this->head;

        cout << "The List is [ ";
        while (node) {
            cout << node->value << " -> ";
            node = node->next;
        }

        cout << "nullptr ].\n";
    }

    void displayBackwards() {
        Node* node = this->tail;

        cout << "The Reversed List is [ ";
        while (node) {
            cout << node->value << " -> ";
            node = node->prev;
        }

        cout << "nullptr ].\n";
    }

    void displayNodeAddresses() {
        Node* node = this->head;

        cout << "The Addresses of the nodes are [ ";
        while (node) {
            cout << &(*node) << " -> ";
            node = node->next;
        }

        cout << "nullptr ].\n";
    }

    ~MyLinkedList() {
        Node* node = this->head;

        while (node) {
            Node* temp = node;
            node = node->next;

            delete temp;
        }

        cout << "Cleaned up memory" << endl;
    }
};
