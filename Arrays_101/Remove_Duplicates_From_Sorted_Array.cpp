#include <vector>

using namespace std;
// Algorithm Analysis
//      Time Complexity:     Ο(n) Ω(n) Θ(n)
//      Space Complexity:    Ο(1) Ω(1) Θ(1)

class Solution {
   public:
    int removeDuplicates(vector<int>& nums) {
        if (nums.size() < 2)
            return nums.size();

        int k = 0;

        for (size_t i = 0; i < nums.size(); i++) {
            if (i == 0 || nums[i] != nums[i - 1]) {
                nums[k] = nums[i];
                k++;
            }
        }

        return k;
    }
};
