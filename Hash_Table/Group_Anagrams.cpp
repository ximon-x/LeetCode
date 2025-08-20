#include <algorithm>
#include <string>
#include <unordered_map>
#include <vector>
using namespace std;

class Solution {
public:
  vector<vector<string>> groupAnagrams(vector<string> &strs) {
    unordered_map<string, vector<string>> anagrams = {};
    vector<vector<string>> result;

    for (auto s : strs) {
      string key = s;
      sort(key.begin(), key.end());

      if (anagrams.find(key) == anagrams.end()) {
        anagrams[key] = {s};
      } else {
        anagrams[key].push_back(s);
      }
    }

    for (auto [k, v] : anagrams) {
      result.push_back(v);
    }

    return result;
  }
};
