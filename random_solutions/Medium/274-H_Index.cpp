#include <vector>
using namespace std;

class Solution {
public:
  int hIndex(vector<int> &citations) {
    int n = citations.size();
    vector<int> counts(n + 1, 0);

    for (auto c : citations) {
      if (c >= n)
        counts[n]++;
      else
        counts[c]++;
    }

    int papers = 0;
    for (int h = n; h >= 0; h--) {
      papers += counts[h];
      if (papers >= h)
        return h;
    }

    return 0;
  }
};
