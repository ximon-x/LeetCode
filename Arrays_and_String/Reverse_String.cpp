#include <utility>
#include <vector>

using namespace std;

class Solution {
   public:
    // Algorithm Analysis
    //      Time Complexity:     Ο(n) Ω(n) Θ(n)
    //      Space Complexity:    Ο(1) Ω(1) Θ(1)
    void reverseString(vector<char>& s) {
        for (int i = 0; i < s.size() / 2; i++) {
            swap(s[i], s[s.size() - i - 1]);
        }
    }
};
