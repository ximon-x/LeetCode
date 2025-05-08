#include <cmath>
#include <queue>
#include <set>
using namespace std;

class Solution {
   public:
    int numSquares(int n) {
        int k = 1;
        int root = 0;

        set<int> s = {};
        queue<int> q = {};

        s.insert(root);
        q.push(root);

        while (!q.empty()) {
            int size = q.size();

            for (int i = 0; i < size; i++) {
                int currSum = q.front();

                for (int j = 1; j < n; j++) {
                    int nextSum = currSum + (j * j);

                    if (nextSum == n)
                        return k;

                    if (nextSum > n)
                        break;

                    if (s.find(nextSum) == s.end()) {
                        s.insert(nextSum);
                        q.push(nextSum);
                    }
                }

                q.pop();
            }

            k++;
        }

        return n;
    }
};
