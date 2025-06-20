#include <set>
#include <vector>
using namespace std;

class Solution {
public:
  int numIslands(vector<vector<char>> &grid) {
    int islands = 0;

    set<pair<int, int>> visited = {};

    for (int i = 0; i < grid.size(); i++) {
      for (int j = 0; j < grid[i].size(); j++) {
        // Continue if the cell is not part of an island.
        if (grid[i][j] == '0')
          continue;

        // Continue if this cell has been visited as part of another island.
        if (visited.find({i, j}) != visited.end())
          continue;

        islands++;
        visited.insert({i, j});
        dfs({i, j}, visited, grid);
      }
    }

    return islands;
  }

  void dfs(pair<int, int> c, set<pair<int, int>> &v, vector<vector<char>> &g) {
    vector<pair<int, int>> d = {{0, 1}, {1, 0}, {0, -1}, {-1, 0}};
    auto [i, j] = c;

    for (auto [dx, dy] : d) {
      int x = i + dx;
      int y = j + dy;

      if (x < 0 || y < 0 || x >= g.size() || y >= g[x].size())
        continue;

      if (g[x][y] == '0')
        continue;

      if (v.find({x, y}) != v.end())
        continue;

      v.insert({x, y});
      dfs({x, y}, v, g);
    }
  };
};
