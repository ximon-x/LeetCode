#include <cmath>
#include <queue>
#include <unordered_set>
using namespace std;

class Solution {
public:
  bool isHappy(int n) {
    unordered_set<int> v = {};
    queue<int> q = {};
    q.push(n);

    while (!q.empty()) {
      int x = q.front();
      q.pop();

      if (x == 1) {
        return true;
      }

      int sum = 0;
      while (x != 0) {
        sum += pow(x % 10, 2);
        x /= 10;
      }

      if (v.find(sum) != v.end()) {
        return false;
      } else {
        v.insert(sum);
      }

      q.push(sum);
    }

    return false;
  }
};
