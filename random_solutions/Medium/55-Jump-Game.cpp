#include <vector>
using namespace std;

class Solution {
public:
  bool canJump(vector<int> nums) {
    int n = nums.size();

    int p = n - 2;
    int q = n - 1;

    while (p >= 0) {
      if (nums[p] >= q - p) {
        q = p;
      }

      p--;
    }

    return q == 0;
  }
};
