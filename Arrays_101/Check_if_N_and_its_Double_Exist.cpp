#include <cstddef>
#include <vector>
using namespace std;

// Algorithm Analysis
//      Time Complexity:     Ο(n*2) Ω(n*2) Θ(n*2)
//      Space Complexity:    Ο(1) Ω(1) Θ(1)

class Solution {
   public:
    bool checkIfExist(vector<int>& arr) {
        for (size_t i = 0; i < arr.size(); i++) {
            for (size_t j = 0; j < arr.size(); j++) {
                if (arr[i] == arr[j] * 2 && i != j)
                    return true;
            }
        }
        return false;
    }
};
