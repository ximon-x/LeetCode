#include <stack>
using namespace std;

class MyQueue {
private:
  stack<int> forward;
  stack<int> backward;

public:
  MyQueue() {
    forward = {};
    backward = {};
  }

  void push(int x) { forward.push(x); }

  int pop() {
    if (!backward.empty()) {
      int result = backward.top();
      backward.pop();
      return result;
    }

    while (!forward.empty()) {
      backward.push(forward.top());
      forward.pop();
    }

    int result = backward.top();
    backward.pop();
    return result;
  }

  int peek() {
    if (!backward.empty()) {
      int result = backward.top();
      return result;
    }

    while (!forward.empty()) {
      backward.push(forward.top());
      forward.pop();
    }

    int result = backward.top();
    return result;
  }

  bool empty() { return forward.size() + backward.size() == 0; }
};
