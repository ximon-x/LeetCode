#include <string>
#include <unordered_map>
#include <unordered_set>
#include <vector>

using namespace std;

class Solution {
public:
  bool isValidSudoku(vector<vector<char>> &board) {
    unordered_map<int, unordered_set<int>> rows = {};
    unordered_map<int, unordered_set<int>> columns = {};
    unordered_map<string, unordered_set<int>> squares = {};

    for (int r = 0; r < 9; r++) {
      for (int c = 0; c < 9; c++) {
        if (board[r][c] == '.')
          continue;

        string rc = to_string(int(r / 3)) + to_string(int(c / 3));
        if (rows[r].find(board[r][c]) != rows[r].end() ||
            columns[c].find(board[r][c]) != columns[c].end() ||
            squares[rc].find(board[r][c]) != squares[rc].end())
          return false;

        rows[r].insert(board[r][c]);
        columns[c].insert(board[r][c]);
        squares[rc].insert(board[r][c]);
      }
    }

    return true;
  }
};
