#include <vector>
using namespace std;

class MyHashSet {
  vector<vector<int>> data;

public:
  MyHashSet() { data = vector(10, vector(0, 0)); }

  void add(int key) {
    int address = key % 10;

    for (auto k : data[address]) {
      if (k == key)
        return;
    }

    data[address].push_back(key);
  }

  void remove(int key) {
    int address = key % 10;
    int n = data[address].size();

    for (int i = 0; i < n; i++) {
      if (data[address][i] == key) {
        data[address].erase(data[address].begin() + i);
      }
    }
  }

  bool contains(int key) {
    int address = key % 10;
    int n = data[address].size();

    for (auto k : data[address]) {
      if (k == key)
        return true;
    }

    return false;
  }
};
