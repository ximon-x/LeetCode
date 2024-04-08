#include <optional>
#include <vector>

using namespace std;

// Algorithm Analysis
//      Time Complexity:     Ο(n) Ω(n) Θ(n)
//      Space Complexity:    Ο(1) Ω(1) Θ(1)

class Solution {
   public:
    int thirdMax(vector<int>& nums) {
        if (nums.size() < 1)
            return 0;

        optional<int> max1, max2, max3;

        for (size_t i = 0; i < nums.size(); i++) {
            if (max1 == nums[i] || max2 == nums[i] || max3 == nums[i])
                continue;

            // First Maximum has not been found
            if (!max1.has_value()) {
                max1 = nums[i];
                continue;
            }

            // First Maximum has been found but is less than current value
            if (max1.has_value() && nums[i] > max1.value()) {
                // If Second Maximum has been found, we need to store its
                // previous value in Third Maximum.
                if (max2.has_value()) {
                    max3 = max2.value();
                    max2 = max1.value();
                    max1 = nums[i];
                } else {
                    max2 = max1.value();
                    max1 = nums[i];
                }
                continue;
            }

            // Second Maximum has not been found
            if (!max2.has_value()) {
                max2 = nums[i];
                continue;
            }

            if (max2.has_value() && nums[i] > max2.value()) {
                max3 = max2.value();
                max2 = nums[i];
                continue;
            }

            if (!max3.has_value()) {
                max3 = nums[i];
                continue;
            }

            if (max3.has_value() && nums[i] > max3.value()) {
                max3 = nums[i];
            }
        }

        return max3.has_value() ? max3.value() : max1.value();
    }
};
