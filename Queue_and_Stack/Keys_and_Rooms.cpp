#include <queue>
#include <set>
#include <vector>
using namespace std;

class Solution {
public:
  bool canVisitAllRooms(vector<vector<int>> &nums) {
    set<int> visited = {};
    queue<int> keys = {};

    visited.insert(0);
    keys.push(0);

    while (!keys.empty()) {
      int key = keys.front();
      keys.pop();

      for (auto k : nums[key]) {
        if (visited.find(k) != visited.end())
          continue;

        visited.insert(k);
        keys.push(k);
      }
    }

    return nums.size() == visited.size();
  }
};
