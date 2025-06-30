#include <map>
#include <vector>
using namespace std;

class Node {
public:
  int val;
  vector<Node *> neighbors;

  Node() {
    val = 0;
    neighbors = vector<Node *>();
  }

  Node(int _val) {
    val = _val;
    neighbors = vector<Node *>();
  }

  Node(int _val, vector<Node *> _neighbours) {
    val = _val;
    neighbors = _neighbours;
  }
};

class Solution {
public:
  Node *cloneGraph(Node *node) {
    if (node == nullptr)
      return nullptr;

    Node *root = new Node(node->val);
    map<Node *, Node *> c = {};

    c.insert({node, root});
    clone(node, root, c);

    return root;
  }

private:
  void clone(Node *node, Node *nodeClone, map<Node *, Node *> &clones) {
    for (auto neighbour : node->neighbors) {
      if (clones.find(neighbour) != clones.end()) {
        nodeClone->neighbors.push_back(clones.at(neighbour));
        continue;
      }

      Node *neighbourClone = new Node(neighbour->val);
      nodeClone->neighbors.push_back(neighbourClone);

      clones.insert({neighbour, neighbourClone});
      clone(neighbour, neighbourClone, clones);
    }
  }
};
