#include <cstdlib>
#include "vector"

using namespace std;

// Algorithm Analysis
//      Time Complexity:     Ο(n) Ω(n) Θ(n)
//      Space Complexity:    Ο(1) Ω(1) Θ(1)

class Solution {
   public:
    vector<int> findDisappearedNumbers(vector<int>& nums) {
        vector<int> answer = {};

        size_t n = nums.size();

        for (size_t i = 0; i < n; i++) {
            int index = abs(nums[i]) - 1;
            nums[index] = abs(nums[index]) * -1;
        }

        for (size_t i = 0; i < n; i++) {
            if (nums[i] > 0)
                answer.push_back(i + 1);
        }

        return answer;
    }
};
