class ArrayWrapper {
  private data: number[];

  constructor(nums: number[]) {
    this.data = nums;
  }

  // Algorithm Analysis
  //      Time Complexity:     Ο(n) Ω(n) Θ(n)
  //      Space Complexity:    Ο(1) Ω(1) Θ(1)
  valueOf(): number {
    return this.data.reduce((a, b) => a + b, 0);
  }

  // Algorithm Analysis
  //      Time Complexity:     Ο(n) Ω(n) Θ(n)
  //      Space Complexity:    Ο(n) Ω(n) Θ(n)
  toString(): string {
    return `[${this.data.toString()}]`;
  }
}
