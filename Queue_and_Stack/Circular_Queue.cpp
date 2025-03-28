#include <vector>
using namespace std;

class CircularQueue {
   private:
    vector<int> data;
    int length;

    int head;
    int tail;

   public:
    CircularQueue(int k) {
        head = 0;
        tail = -1;

        length = 0;
        data.resize(k);
    }

    // Algorithm Analysis
    //      Time Complexity:     Ο(1) Ω(1) Θ(1)
    //      Space Complexity:    Ο(1) Ω(1) Θ(1)
    bool enQueue(int value) {
        if (isFull())
            return false;

        if (tail == data.size() - 1)
            tail = 0;
        else
            tail++;

        data[tail] = value;

        length++;
        return true;
    }

    // Algorithm Analysis
    //      Time Complexity:     Ο(1) Ω(1) Θ(1)
    //      Space Complexity:    Ο(1) Ω(1) Θ(1)
    bool deQueue() {
        if (isEmpty())
            return false;

        if (head == data.size() - 1)
            head = 0;
        else
            head++;

        length--;
        return true;
    }

    // Algorithm Analysis
    //      Time Complexity:     Ο(1) Ω(1) Θ(1)
    //      Space Complexity:    Ο(1) Ω(1) Θ(1)
    int Front() {
        if (isEmpty())
            return -1;

        return data[head];
    }

    // Algorithm Analysis
    //      Time Complexity:     Ο(1) Ω(1) Θ(1)
    //      Space Complexity:    Ο(1) Ω(1) Θ(1)
    int Rear() {
        if (isEmpty())
            return -1;

        return data[tail];
    }

    // Algorithm Analysis
    //      Time Complexity:     Ο(1) Ω(1) Θ(1)
    //      Space Complexity:    Ο(1) Ω(1) Θ(1)
    bool isFull() { return length == data.size(); }

    // Algorithm Analysis
    //      Time Complexity:     Ο(1) Ω(1) Θ(1)
    //      Space Complexity:    Ο(1) Ω(1) Θ(1)
    bool isEmpty() { return length == 0; }
};
