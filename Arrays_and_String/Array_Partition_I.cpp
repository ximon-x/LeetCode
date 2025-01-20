#include <algorithm>
#include <vector>

using namespace std;

class Solution {
   public:
    // Algorithm Analysis
    //      Time Complexity:     Ο(nlogn) Ω(nlogn) Θ(nlogn)
    //      Space Complexity:    Ο(1) Ω(1) Θ(1)
    int arrayPairSum(vector<int>& nums) {
        int result = 0;
        sort(nums.begin(), nums.end());

        for (int i = 0; i < nums.size(); i += 2) {
            result += nums[i];
        }

        return result;
    }
};
