#include <vector>
using namespace std;

class Solution {
public:
  int maxProfit(vector<int> &prices) {
    int k = 0;

    int p = 0;
    int q = 1;

    while (q < prices.size()) {
      if (prices[q] < prices[p]) {
        p = q;
      } else if (prices[q] - prices[p] > k) {
        k = prices[q] - prices[p];
      }

      q++;
    }

    return k;
  }
};
