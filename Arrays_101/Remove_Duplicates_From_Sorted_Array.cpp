#include <cmath>
#include <cstddef>
#include <vector>

using namespace std;

class Solution {
   public:
    void modifyArray(int& p, int& q, vector<int>& nums) {
        // TODO: Replace items nums(p, q) with nums[q, q + q-p] but consider out
        // of bounds error.
    }

    int removeDuplicates(vector<int>& nums) {
        if (nums.size() < 2)
            return nums.size();

        // Number of unique items.
        int k = 0;

        // Pointers for array access.
        int p = 0;
        int q = 1;

        while (p < nums.size() - 1 && nums[p] != -INFINITY) {
            // If the current number is a duplicate:
            if (nums[p] == nums[q]) {
                // Check all succeeding numbers to know if they're duplicates
                // too.
                while (nums[p] == nums[q])
                    q++;

                // Remove all numbers between index p and q
                modifyArray(p, q, nums);

                p++;
                q = p + 1;
            }

            k++;
        }

        return k;
    }
};
