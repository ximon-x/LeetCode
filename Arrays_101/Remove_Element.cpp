#include <cstddef>
#include <iostream>
#include <vector>
#include "../utils/helpers.cpp"

using namespace std;

class Solution {
   public:
    int removeElement(vector<int>& nums, int val) {
        size_t k = 0;

        size_t m = 0;
        size_t n = nums.size() - 1;

        while (m < nums.size()) {
            if (nums[m] == val) {
                cout << "Swapping " << nums[m] << "with " << nums[n] << "\n";

                int temp = nums[m];
                nums[m] = nums[n];
                nums[n] = temp;
                n--;
            }
            m++;

            Helpers::printContainer(nums);
        }

        return k;
    }
};

int main() {
    Solution solution{};
    vector<int> numbers = {3, 2, 2, 3};

    int answer = solution.removeElement(numbers, 2);
    cout << "Answer: " << answer << "\n";
}
