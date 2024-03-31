#include <algorithm>
#include <vector>

// Algorithm Analysis
//      Time Complexity:     Ο(2n^2 + nlog(n)) Ω(1)
//      Space Complexity:    Ο(n) Ω(n) Θ(n)

using namespace std;
class Solution {
   public:
    int heightChecker(vector<int>& heights) {
        int k = 0;

        vector<int> copy{};
        copy.resize(heights.size());

        for (size_t i = 0; i < heights.size(); i++) {
            copy[i] = heights[i];
        }

        sort(heights.begin(), heights.end());

        for (size_t i = 0; i < heights.size(); i++) {
            if (copy[i] != heights[i])
                k++;
        }

        return k;
    }
};

int main() {
    Solution solution;
}
