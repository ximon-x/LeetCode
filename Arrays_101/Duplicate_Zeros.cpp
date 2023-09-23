#include <vector>

using namespace std;

// Algorithm Analysis
//      Time Complexity:     Ο(nm) Ω(n)
//      Space Complexity:    Ο(n) Ω(n) Θ(n)

class Solution {
   public:
    void shiftItems(vector<int>& arr, size_t start) {
        int prev = 0;

        for (size_t i = start; i < arr.size(); i++) {
            int temp = arr[i];
            arr[i] = prev;
            prev = temp;
        }
    }

    void duplicateZeros(vector<int>& arr) {
        size_t n = arr.size();
        size_t i = 0;

        while (i < n) {
            if (arr[i] == 0 && i != n - 1) {
                shiftItems(arr, i + 1);
                i++;
            }
            i++;
        }
    }
};
