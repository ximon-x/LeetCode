class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function pairSum(head: ListNode | null): number {
  // pairSum -> Time { O(n^2), θ(n^2), Ω(n) } and Space { O(n), θ(n), Ω(n) }

  const values: number[] = [];
  let maxDiff = 0;

  while (head) {
    values.push(head.val);
    head = head.next;
  }

  const n = values.length;

  for (let i = 0; i < n / 2; i++) {
    const currDiff = values[i] + values[n - 1 - i];

    if (currDiff > maxDiff) {
      maxDiff = currDiff;
    }
  }

  return maxDiff;
}
