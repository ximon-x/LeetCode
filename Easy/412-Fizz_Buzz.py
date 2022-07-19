class Solution:
    """
    generate    -> Time { O(n), θ(n), Ω(1) } and Space { O(1), θ(1), Ω(1) }
    """

    def fizzBuzz(self, n: int) -> list[str]:
        answer = []

        for i in range(1, n + 1):
            if i % 3 == 0 and i % 5 == 0:
                answer.append("FizzBuzz")
            elif i % 3 == 0:
                answer.append("Fizz")
            elif i % 5 == 0:
                answer.append("Buzz")
            else:
                answer.append(str(i))

        return answer
