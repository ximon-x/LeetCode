#include <unordered_set>
#include <vector>
using namespace std;

class Solution {
public:
  vector<int> intersection(vector<int> &nums1, vector<int> nums2) {
    unordered_set<int> m = {};
    vector<int> k = {};

    for (auto num : nums1) {
      m.insert(num);
    }

    for (auto num : nums2) {
      if (m.find(num) != m.end()) {
        k.push_back(num);
        m.erase(num);
      }
    }

    return k;
  }
};
