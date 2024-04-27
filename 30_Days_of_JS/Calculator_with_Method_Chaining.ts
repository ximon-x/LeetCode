class Calculator {
  private data: number;

  constructor(value: number) {
    this.data = value;
  }

  // Algorithm Analysis
  //      Time Complexity:     Ο(1) Ω(1) Θ(1)
  //      Space Complexity:    Ο(1) Ω(1) Θ(1)
  add(value: number): Calculator {
    return new Calculator(this.data + value);
  }

  // Algorithm Analysis
  //      Time Complexity:     Ο(1) Ω(1) Θ(1)
  //      Space Complexity:    Ο(1) Ω(1) Θ(1)
  subtract(value: number): Calculator {
    return new Calculator(this.data - value);
  }

  // Algorithm Analysis
  //      Time Complexity:     Ο(1) Ω(1) Θ(1)
  //      Space Complexity:    Ο(1) Ω(1) Θ(1)
  multiply(value: number): Calculator {
    return new Calculator(this.data * value);
  }

  // Algorithm Analysis
  //      Time Complexity:     Ο(1) Ω(1) Θ(1)
  //      Space Complexity:    Ο(1) Ω(1) Θ(1)
  divide(value: number): Calculator {
    if (value == 0) throw new Error("Division by zero is not allowed");
    return new Calculator(this.data / value);
  }

  // Algorithm Analysis
  //      Time Complexity:     Ο(1) Ω(1) Θ(1)
  //      Space Complexity:    Ο(1) Ω(1) Θ(1)
  power(value: number): Calculator {
    return new Calculator(this.data ** value);
  }

  // Algorithm Analysis
  //      Time Complexity:     Ο(1) Ω(1) Θ(1)
  //      Space Complexity:    Ο(1) Ω(1) Θ(1)
  getResult(): number {
    return this.data;
  }
}
