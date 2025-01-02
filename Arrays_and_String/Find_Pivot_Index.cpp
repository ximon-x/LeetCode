#include <vector>

using namespace std;

class Solution {
   public:
    // Algorithm Analysis
    //      Time Complexity:     Ο(n) Ω(n) Θ(n)
    //      Space Complexity:    Ο(1) Ω(1) Θ(1)
    int pivotIndex(vector<int>& nums) {
        int leftSum = 0;
        int totalSum = 0;

        for (auto i = 0; i < nums.size(); i++) {
            totalSum += nums[i];
        }

        // We check the sum before each index and compare if it's equal to the
        // total minus the current element.
        for (int i = 0; i < nums.size(); i++) {
            if (leftSum * 2 == totalSum - nums[i]) {
                return i;
            }

            leftSum += nums[i];
        }

        return -1;
    }
};
