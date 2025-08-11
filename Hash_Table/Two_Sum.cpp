#include <unordered_map>
#include <vector>
using namespace std;

class Solution {
public:
  vector<int> twoSum(vector<int> &nums, int target) {
    unordered_map<int, int> m = {};

    for (int i = 0; i < nums.size(); i++) {
      int value = target - nums[i];

      if (m.find(value) != m.end()) {
        return {m[value], i};
      }

      m.insert({nums[i], i});
    }

    return {};
  }
};
