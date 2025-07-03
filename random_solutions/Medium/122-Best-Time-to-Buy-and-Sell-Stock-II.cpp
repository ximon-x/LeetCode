#include <vector>
using namespace std;

class Solution {
public:
  int maxProfit(vector<int> &prices) {
    int k = 0;

    int p = 0;
    int q = 1;

    int profit = 0;

    while (q < prices.size()) {
      if (prices[q] - prices[p] > profit) {
        profit = prices[q] - prices[p];
        continue;
        q++;
      }

      k += profit;
      profit = 0;
      p = q;
      q++;
    }

    return k;
  }
};
