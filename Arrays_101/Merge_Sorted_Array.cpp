#include <iostream>
#include <vector>
using namespace std;

// Algorithm Analysis
//      Time Complexity:     Ο(n + m) Ω(n + m) Θ(n + m)
//      Space Complexity:    Ο(1) Ω(1) Θ(1)

class Solution {
   public:
    void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) {
        for (uint i = nums1.size(); i > 0; i--) {
            if (n == 0) {
                nums1[i - 1] = nums1[m - 1];
                m--;
                continue;
            }

            if (m == 0) {
                nums1[i - 1] = nums2[n - 1];
                n--;
                continue;
            }

            if (nums1[m - 1] >= nums2[n - 1]) {
                nums1[i - 1] = nums1[m - 1];
                if (m != 0)
                    m--;
                continue;
            }

            if (nums1[m - 1] < nums2[n - 1]) {
                nums1[i - 1] = nums2[n - 1];
                if (n != 0)
                    n--;
                continue;
            }
        }
    }
};
