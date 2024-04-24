export {};

type Fn<T> = () => Promise<T>;

// Algorithm Analysis
//      Time Complexity:     Ο(n) Ω(n) Θ(n)
//      Space Complexity:    Ο(n) Ω(n) Θ(n)

function promiseAll<T>(functions: Fn<T>[]): Promise<T[]> {
  return new Promise((resolveArray, rejectArray) => {
    const answers: T[] = Array(functions.length);
    let waiting = functions.length;

    functions.forEach((fn, i) => {
      fn()
        .then((answer) => {
          answers[i] = answer;
          waiting--;
          if (waiting == 0) resolveArray(answers);
        })
        .catch((reason) => {
          rejectArray(reason);
        });
    });
  });
}
