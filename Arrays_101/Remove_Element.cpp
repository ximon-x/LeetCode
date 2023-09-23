#include <vector>

using namespace std;

// Algorithm Analysis
//      Time Complexity:     Ο(n + km) Ω(n + k)
//      Space Complexity:    Ο(1) Ω(1) Θ(1)

class Solution {
   public:
    int removeElement(vector<int>& nums, int val) {
        size_t k = 0;

        // Find number of unique numbers.
        for (size_t i = 0; i < nums.size(); i++) {
            if (nums[i] != val) {
                k++;
            }
        }

        // Populate nums[i..k] with unique numbers.
        size_t i = 0;
        while (i < k) {
            for (size_t j = i; j < nums.size(); j++) {
                if (nums[j] != val) {
                    nums[i] = nums[j];
                    i++;
                }
            }
        }

        return k;
    }
};
