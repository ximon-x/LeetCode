#include <cctype>
#include <stack>
#include <string>
using namespace std;

class Solution {
public:
  string decodeString(string s) {
    stack<string> characters = {};

    for (int i = 0; i < s.size(); i++) {
      if (characters.empty()) {
        characters.push(string(1, s[i]));
        continue;
      }

      if (s[i] == '[') {
        characters.push("[");
        continue;
      }

      if (s[i] == ']') {
        string scratch = "";

        while (characters.top() != "[") {
          scratch = characters.top() + scratch;
          characters.pop();
        }

        // Take out the '['
        characters.pop();

        // Take out the times
        int n = stoi(characters.top());
        characters.pop();

        string result = "";

        // Repeat
        for (int i = 0; i < n; i++) {
          result += scratch;
        }

        // Push the final result
        characters.push(result);
        continue;
      }

      if (isdigit(s[i - 1])) {
        string scratch = characters.top();
        characters.pop();

        scratch += s[i];
        characters.push(scratch);
        continue;
      }

      characters.push(string(1, s[i]));
    }

    string result = "";
    while (!characters.empty()) {
      result = characters.top() + result;
      characters.pop();
    }

    return result;
  }
};
