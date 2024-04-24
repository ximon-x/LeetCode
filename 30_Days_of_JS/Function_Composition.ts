export {};
type F = (x: number) => number;

// Algorithm Analysis
//      Time Complexity:     Ο(n) Ω(n) Θ(n)
//      Space Complexity:    Ο(1) Ω(1) Θ(1)

function compose(functions: F[]): F {
  return function (x) {
    for (let i = functions.length - 1; i >= 0; i--) {
      x = functions[i](x);
    }

    return x;
  };
}
