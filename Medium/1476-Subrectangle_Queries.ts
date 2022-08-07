class SubrectangleQueries {
  // updateSubrectangle    -> Time { O(n^2), θ(n^2), Ω(n) } and Space { O(1), θ(1), Ω(1) }
  // getValue    -> Time { O(1), θ(1), Ω(1) } and Space { O(1), θ(1), Ω(1) }

  rectangle: number[][] = [[]];

  constructor(_rectangle: number[][]) {
    this.rectangle = _rectangle;
  }

  updateSubrectangle(
    row1: number,
    col1: number,
    row2: number,
    col2: number,
    newValue: number
  ): void {
    for (let i = row1; i <= row2; i++) {
      for (let j = col1; j <= col2; j++) {
        this.rectangle[i][j] = newValue;
      }
    }
  }

  getValue(row: number, col: number): number {
    return this.rectangle[row][col];
  }
}
