#include <iostream>
#include <ostream>
#include <stack>
#include <string>

class Solution {
   public:
    bool isValid(std::string s) {
        std::stack<char> stack = {};

        for (int i = 0; i < s.size(); i++) {
            if (s[i] == '(' || s[i] == '{' || s[i] == '[') {
                stack.push(s[i]);
                continue;
            }

            if (stack.empty())
                return false;

            char top = stack.top();

            if (s[i] == ')' && top != '(')
                return false;

            if (s[i] == '}' && top != '{')
                return false;

            if (s[i] == ']' && top != '[')
                return false;

            stack.pop();
        }

        if (!stack.empty())
            return false;

        return true;
    }
};

int main() {
    Solution solution;

    std::string string1 = "[()]{}";
    std::string string2 = "([()]{}[])";
    std::string string3 = "[()]({}({})";

    std::cout << string1 << ": " << solution.isValid(string1) << std::endl;
    std::cout << string2 << ": " << solution.isValid(string2) << std::endl;
    std::cout << string3 << ": " << solution.isValid(string3) << std::endl;
}
