#include <queue>
#include <set>
#include <string>
#include <vector>
using namespace std;

class Solution {
   public:
    int openLock(vector<string>& deadends, string target) {
        int turns = 0;
        string root = "0000";

        set<string> v = {};
        queue<string> q = {};

        q.push(root);
        v.insert(root);

        for (auto d : deadends) {
            if (d == root) {
                return -1;
            }

            v.insert(d);
        }

        while (!q.empty()) {
            int size = q.size();

            for (int i = 0; i < size; i++) {
                string l = q.front();
                if (l == target)
                    return turns;

                vector<string> children = getChildren(l);
                for (auto c : children) {
                    if (v.find(c) != v.end())
                        continue;

                    v.insert(c);
                    q.push(c);
                }

                q.pop();
            }

            turns++;
        }

        return -1;
    }

   private:
    vector<string> getChildren(string lock) {
        vector<string> children = {};

        for (int i = 0; i < lock.size(); i++) {
            string l = lock;
            int d = lock[i] - '0';

            // Increment
            l[i] = '0' + (d + 1) % 10;
            children.push_back(l);

            // Decrement
            l[i] = '0' + (d + 9) % 10;
            children.push_back(l);
        }

        return children;
    }
};
