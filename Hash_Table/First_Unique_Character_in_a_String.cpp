#include <queue>
#include <string>
#include <unordered_map>

using namespace std;

class Solution {
public:
  int firstUniqChar(string s) {
    unordered_map<char, int> m;
    queue<pair<char, int>> q;

    for (int i = 0; i < s.size(); i++) {
      char c = s[i];

      if (m.find(c) != m.end()) {
        m[c] += 1;
        continue;
      }

      m[c] = 1;
      q.push({c, i});
    }

    while (!q.empty()) {
      auto [c, i] = q.front();
      q.pop();

      if (m[c] == 1)
        return i;
    }

    return -1;
  }
};
