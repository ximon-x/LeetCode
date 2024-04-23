type Fn = (...params: any[]) => Promise<any>;

// Algorithm Analysis
//      Time Complexity:     Ο(1) Ω(1) Θ(1)
//      Space Complexity:    Ο(1) Ω(1) Θ(1)

function timeLimit(fn: Fn, t: number): Fn {
  return async function (...args) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject("Time Limit Exceeded");
      }, t);

      fn(...args)
        .then((ans) => {
          resolve(ans);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
}
