#include <cstddef>

class MyLinkedList {
    MyLinkedList* next;
    int val;

   public:
    MyLinkedList() {
        this->val = 0;
        this->next = NULL;
    }

    void addAtHead(int val) {}

    void addAtTail(int val) {}

    void addAtIndex(int index, int val) {}

    void deleteAtIndex(int index) {}

    int get(int index) {}
};
