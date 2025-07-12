#include <set>
#include <stack>
#include <vector>
using namespace std;

struct TreeNode {
  int val;
  TreeNode *left;
  TreeNode *right;
  TreeNode() : val(0), left(nullptr), right(nullptr) {}
  TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
  TreeNode(int x, TreeNode *left, TreeNode *right)
      : val(x), left(left), right(right) {}
};

class Solution {
public:
  vector<int> inorderTraversal(TreeNode *root) {
    if (!root)
      return {};

    vector<int> r = {};
    set<TreeNode *> v = {};
    stack<TreeNode *> s = {};

    s.push(root);
    v.insert(root);

    while (!s.empty()) {
      auto node = s.top();

      if (node->left && v.find(node->left) == v.end()) {
        v.insert(node->left);
        s.push(node->left);
        continue;
      }

      r.push_back(node->val);
      s.pop();

      if (node->right && v.find(node->right) == v.end()) {
        v.insert(node->right);
        s.push(node->right);
        continue;
      }
    }

    return r;
  }
};
