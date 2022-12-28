class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

class TreeNode {
  val: number;
  left: TreeNode | null | undefined;
  right: TreeNode | null | undefined;

  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? undefined : left;
    this.right = left === undefined ? undefined : right;
  }
}

class Stack {
  data: number[];
  top: number;

  constructor(size: number) {
    this.data = new Array(size);
  }
}
