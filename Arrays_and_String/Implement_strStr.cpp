#include <string>

using namespace std;

class Solution {
   public:
    int strStr(string haystack, string needle) {
        int m = haystack.length();
        int n = needle.length();

        for (int i = 0; i < m; i++) {
            if (haystack[i] != needle[0])
                continue;

            bool valid = true;

            for (int j = 0; j < n; j++) {
                if (haystack[j + i] != needle[j]) {
                    valid = false;
                    break;
                }
            }

            if (valid)
                return i;
        }

        return -1;
    }
};
