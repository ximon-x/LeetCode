#include <algorithm>
#include <cmath>
#include <vector>

using namespace std;

// Algorithm Analysis
//      Time Complexity:     Ο(n + nlog(n)) Ω(n + nlog(n)) Θ(n + nlog(n))
//      Space Complexity:    Ο(1) Ω(1) Θ(1)

class Solution {
   public:
    vector<int> sortedSquares(vector<int>& nums) {
        for (int i = 0; i < nums.size(); i++) {
            nums[i] = pow(nums[i], 2);
        }

        sort(nums.begin(), nums.end());
        return nums;
    }
};
