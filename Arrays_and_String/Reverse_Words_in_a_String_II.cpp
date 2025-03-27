#include <string>
#include <utility>

using namespace std;

class Solution {
   public:
    // Algorithm Analysis
    //      Time Complexity:     Ο(n) Ω(1)
    //      Space Complexity:    Ο(1) Ω(1) Θ(1)
    string reverseWords(string s) {
        if (s.length() <= 1)
            return s;

        int fast = 1;
        int slow = 0;

        while (fast < s.length()) {
            // Beginning of word
            if (s[fast] != ' ' && s[fast - 1] == ' ') {
                slow = fast;
            }

            // End of Word
            else if (s[fast] == ' ' && s[fast - 1] != ' ') {
                reverse(s, slow, fast - 1);
            }

            fast++;
        }

        // Reverse last word
        reverse(s, slow, fast - 1);
        return s;
    }

   private:
    void reverse(string& s, int start, int end) {
        while (start < end) {
            swap(s[start], s[end]);
            start++;
            end--;
        }
    }
};
