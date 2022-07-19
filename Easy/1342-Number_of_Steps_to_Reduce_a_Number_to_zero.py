class Solution:
    # numberofSteps   -> Time { O(log n), θ(log n), Ω(1) } and Space { O(1), θ(1), Ω(1) }

    def numberOfSteps(self, num: int) -> int:
        steps = 0

        while num != 0:
            if num % 2 == 0:
                num /= 2
            else:
                num -= 1
            steps += 1

        return steps
