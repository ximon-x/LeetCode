type F = (...args: number[]) => void;

// Algorithm Analysis
//      Time Complexity:     Ο(1) Ω(1) Θ(1)
//      Space Complexity:    Ο(1) Ω(1) Θ(1)

function debounce(fn: F, t: number): F {
  let id;

  return function (...args) {
    if (id) {
      clearTimeout(id);
      id = setTimeout(() => {
        fn(...args);
      }, t);
    } else {
      id = setTimeout(() => {
        fn(...args);
      }, t);
    }
  };
}
