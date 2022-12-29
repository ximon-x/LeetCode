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
  private data: any[] = [];
  private top: number = -1;
  public length: number = this.data.length;

  /**
   * Returns a new instance of a fixed size Stack and every element is set to null.
   * =====   Time { O(n), θ(n), Ω(1) }   =====   Space { O(n), θ(n), Ω(n) }  =====
   */
  constructor(size: number) {
    this.data = new Array(size).fill(null);
  }

  /**
   * Removes and Returns the top non-null element in the Stack and Errors if Stack is empty.
   * =====   Time { O(1), θ(1), Ω(1) }   =====   Space { O(1), θ(1), Ω(1) }  =====
   */
  pop(): void {
    if (this.top === -1) {
      throw new Error("The Stack is Empty!");
    } else {
      let value = this.data[this.top];
      this.data[this.top] = null;

      this.top--;
      return value;
    }
  }

  /**
   * Appends the item to the next empty slot in the Stack and Errors if Stack is full.
   * =====   Time { O(1), θ(1), Ω(1) }   =====   Space { O(1), θ(1), Ω(1) }  =====
   */
  push(item: any): void {
    if (this.top == this.data.length - 1) {
      throw new Error("The Stack is Full!");
    } else {
      this.top++;
      this.data[this.top] = item;
    }
  }

  /**
   * Returns the top non-null element in the Stack and Errors if Stack is empty.
   * =====   Time { O(1), θ(1), Ω(1) }   =====   Space { O(1), θ(1), Ω(1) }  =====
   */
  peek() {
    if (this.top == -1) {
      throw new Error("The Stack is Empty!");
    } else {
      return this.data[this.top];
    }
  }

  /**
   *  Returns the number of elements in the Stack
   * =====   Time { O(1), θ(1), Ω(1) }   =====   Space { O(1), θ(1), Ω(1) }  =====
   */
  size() {
    return this.top + 1;
  }
}
