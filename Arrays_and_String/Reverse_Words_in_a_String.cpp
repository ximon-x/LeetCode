#include <string>
#include <vector>

using namespace std;

class Solution {
   public:
    // Algorithm Analysis
    //      Time Complexity:     Ο(n) Ω(n) Θ(n)
    //      Space Complexity:    Ο(n) Ω(1)
    string reverseWords(string s) {
        int left = 0;
        int right = s.size() - 1;

        while (left < right && s[left] == ' ')
            left++;

        while (left < right && s[right] == ' ')
            right--;

        vector<string> words;
        string word;

        while (left <= right) {
            if (s[left] != ' ') {
                word += s[left];
            } else {
                if (!word.empty()) {
                    words.push_back(word);
                    word.clear();
                }
            }
            left++;
        }

        if (!word.empty())
            words.push_back(word);

        string reversed = "";

        for (int i = words.size() - 1; i >= 0; i--) {
            reversed += words[i];

            if (i != 0)
                reversed += ' ';
        }

        return reversed;
    }
};
