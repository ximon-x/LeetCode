#include <cmath>
#include <vector>
#include "../utils/helpers.cpp"

using namespace std;

class Solution {
   public:
    void modifyArray(int& p, int& q, vector<int>& nums) {
        // TODO: Replace items nums(p, q) with nums[q, q + q-p] but consider out
        // of bounds error.
        while (p < q) {
            nums[p] = nums[q + q - p];
            p++;
        }

        while (q < nums.size()) {
            nums[q] = -INFINITY;
            q++;
        }
    }

    int removeDuplicates(vector<int>& nums) {
        if (nums.size() < 2) {
            return nums.size();
        }

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
                Helpers::printContainer(nums);

                p++;
                q = p + 1;
            }

            k++;
        }

        return k;
    }
};

int main() {
    vector<int> nums = {0, 0, 1, 1, 1, 2, 2, 3, 3, 4};
    Solution solution;

    cout << solution.removeDuplicates(nums);
}
