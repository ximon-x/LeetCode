#include <vector>
using namespace std;

class Queue {
   private:
    std::vector<int> data;
    int head;

   public:
    Queue() { head = 0; };

    bool enqueue(int val) {
        data.push_back(val);
        return true;
    }

    bool dequeue() {
        if (head >= data.size()) {
            return false;
        };

        head++;
        return true;
    }

    int read() {
        if (head >= data.size()) {
            return 0;
        }

        return data[head];
    }
};
