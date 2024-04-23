type Counter = {
  increment: () => number;
  decrement: () => number;
  reset: () => number;
};

// Algorithm Analysis
//      Time Complexity:     Ο(1) Ω(1) Θ(1)
//      Space Complexity:    Ο(1) Ω(1) Θ(1)

function createCounter(init: number): Counter {
  let count = 0;

  return {
    increment: () => {
      count++;
      return init + count;
    },
    decrement: () => {
      count--;
      return init + count;
    },
    reset: () => {
      count = 0;
      return init + count;
    },
  };
}
