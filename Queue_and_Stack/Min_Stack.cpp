#include <algorithm>
using namespace std;

class StackNode {
   public:
    int min;
    int data;

    StackNode* next;

    StackNode(int data, int min) {
        this->next = nullptr;
        this->data = data;
        this->min = min;
    }
};

class MinStack {
    StackNode* head;

   public:
    MinStack() { head = nullptr; }

    void push(int val) {
        if (head == nullptr) {
            head = new StackNode(val, val);
        } else {
            int newMin = min(head->min, val);
            StackNode* newHead = new StackNode(val, newMin);

            newHead->next = head;
            head = newHead;
        }
    }

    void pop() { head = head->next; }

    int top() { return head->data; }

    int getMin() { return head->min; }
};
