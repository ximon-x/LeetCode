#include <vector>

using namespace std;

// Algorithm Analysis
//      Time Complexity:     Ο(n) Ω(n) Θ(n)
//      Space Complexity:    Ο(1) Ω(1) Θ(1)

class Solution {
   public:
    int removeElement(vector<int>& nums, int val) {
        size_t i = 0;
        size_t j = 0;

        while (j < nums.size()) {
            if (nums[j] != val) {
                nums[i] = nums[j];
                i++;
            }

            j++;
        }

        return i;
    }
};
