#include <iostream>
#include <stack>
#include <string>
#include <vector>
using namespace std;

class Solution {
   public:
    int evalRPN(vector<string>& tokens) {
        stack<int> s = {};

        auto getOperands = [&]() -> pair<int, int> {
            int operand1 = s.top();
            s.pop();

            int operand2 = s.top();
            s.pop();

            return {operand1, operand2};
        };

        for (int i = 0; i < tokens.size(); i++) {
            string token = tokens[i];

            if (token == "+") {
                auto [op1, op2] = getOperands();
            }

            else if (token == "-") {
                auto [op1, op2] = getOperands();
            }

            else if (token == "*") {
                auto [op1, op2] = getOperands();
            }

            else if (token == "/") {
                auto [op1, op2] = getOperands();
            }

            else {
                int num = stoi(token);
                s.push(num);
            }
        }

        int answer = s.top();
        return answer;
    }
};

int main() {
    Solution solution;
    vector<string> s = {"4", "13", "5", "/", "+"};

    int answer = solution.evalRPN(s);
    cout << "The answer is " << answer << endl;
}
