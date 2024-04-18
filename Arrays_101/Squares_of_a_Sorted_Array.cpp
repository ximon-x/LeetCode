#include <cstdlib>
#include <vector>

using namespace std;

// Algorithm Analysis
//      Time Complexity:     Ο(n) Ω(n) Θ(n)
//      Space Complexity:    Ο(n) Ω(n) Θ(n)

class Solution {
   public:
    vector<int> sortedSquares(vector<int>& nums) {
        int n = nums.size();

        vector<int> result(n);
        int p = 0;
        int q = n - 1;

        for (int i = n - 1; i >= 0; i--) {
            if (abs(nums[p]) > abs(nums[q])) {
                result[i] = nums[p] * nums[p];
                p++;
            } else {
                result[i] = nums[q] * nums[q];
                q--;
            }
        }

        return result;
    }
};
