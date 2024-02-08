#include <vector>

using namespace std;
// Algorithm Analysis
//      Time Complexity:     Ο(mn) Ω(1)
//      Space Complexity:    Ο(1) Ω(1) Θ(1)

class Solution {
   public:
    int removeDuplicates(vector<int>& nums) {
        if (nums.size() < 2)
            return nums.size();

        int k = 1;

        for (size_t p = 0; p < nums.size() - 1; p++) {
            for (size_t q = p + 1; q < nums.size(); q++) {
                if (nums[p] == nums[q]) {
                    continue;
                }

                if (nums[p] < nums[q]) {
                    nums[p + 1] = nums[q];
                    k++;
                    break;
                }
            };

            if (nums[p] == nums[nums.size() - 1])
                break;
        }

        return k;
    }
};
