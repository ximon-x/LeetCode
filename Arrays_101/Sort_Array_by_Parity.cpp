#include <vector>
using namespace std;

// Algorithm Analysis
//      Time Complexity:     Ο(n) Ω(n) Θ(n)
//      Space Complexity:    Ο(1) Ω(1) Θ(1)

class Solution {
   public:
    vector<int> sortArrayByParity(vector<int>& nums) {
        size_t i = 0;
        size_t j = nums.size() - 1;

        while (i < j) {
            if (nums[i] % 2 == 1) {
                int temp = nums[i];
                nums[i] = nums[j];
                nums[j] = temp;
                j--;
            } else {
                i++;
            }
        }

        return nums;
    }
};
