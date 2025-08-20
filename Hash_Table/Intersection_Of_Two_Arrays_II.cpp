#include <unordered_map>
#include <vector>
using namespace std;

class Solution {
public:
  vector<int> intersect(vector<int> &nums1, vector<int> nums2) {
    unordered_map<int, int> m = {};
    vector<int> k = {};

    for (auto n : nums1) {
      if (m.find(n) == m.end()) {
        m[n] = 1;
      } else {
        m[n]++;
      }
    }

    for (auto n : nums2) {
      if (m.find(n) == m.end() || m[n] == 0)
        continue;

      k.push_back(n);
      m[n]--;
    }

    return k;
  }
};
