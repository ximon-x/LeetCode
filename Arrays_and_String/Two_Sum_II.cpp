#include <vector>
using namespace std;

class Solution {
   public:
    // Algorithm Analysis
    //      Time Complexity:    Ο(n)    Ω(n)    Θ(n)
    //      Space Complexity:   Ο(1)    Ω(1)    Θ(1)
    vector<int> twoSum(vector<int>& nums, int target) {
        int p = 0;
        int q = nums.size() - 1;

        while (p != q) {
            int sum = nums[p] + nums[q];

            if (sum == target) {
                return {p + 1, q + 1};
            }

            if (sum < target) {
                p++;
            }

            if (sum > target) {
                q--;
            }
        }

        return {p, q};
    }
};
