#include <vector>
#include "../utils/helpers.cpp"

using namespace std;

class Solution {
   public:
    // Algorithm Analysis
    //      Time Complexity:     Ο(n*2) Ω(1)
    //      Space Complexity:    Ο(n*2) Ω(1)
    vector<int> getRow(int rowIndex) {
        vector<vector<int>> triangle(rowIndex + 1);
        int rows = triangle.size();

        for (int i = 0; i < rows; i++) {
            int cols = i + 1;
            triangle[i].assign(cols, 1);

            for (int j = 1; j < cols - 1; j++) {
                triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
            }
        }

        return triangle[rowIndex];
    }
};
