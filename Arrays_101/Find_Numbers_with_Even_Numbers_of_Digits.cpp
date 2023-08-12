#include <string>
#include <vector>

using namespace std;

// Algorithm Analysis
//      Time Complexity:     Ο(n) Ω(n) Θ(n)
//      Space Complexity:    Ο(n) Ω(1)

class Solution {
   public:
    int findNumbers(vector<int>& nums) {
        int count = 0;

        for (int i = 0; i < nums.size(); i++) {
            string number = to_string(nums[i]);

            if (number.size() % 2 == 0) {
                count++;
            }
        }

        return count;
    }
};
