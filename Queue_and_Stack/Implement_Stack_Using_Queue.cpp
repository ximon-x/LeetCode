#include <queue>
#include <utility>

using namespace std;
class MyStack {
private:
  queue<int> forward;
  queue<int> backward;

public:
  MyStack() {}

  void push(int x) {
    backward.push(x);

    while (!forward.empty()) {
      backward.push(forward.front());
      forward.pop();
    }

    swap(forward, backward);
  }

  int pop() {
    int result = forward.front();
    forward.pop();

    return result;
  }

  int top() { return forward.front(); }

  bool empty() { return forward.size() + backward.size() == 0; }
};
