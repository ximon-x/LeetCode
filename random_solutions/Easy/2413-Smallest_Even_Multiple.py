class Solution:
    def smallestEvenMultiple(self, n: int) -> int:
        # smallestEvenMultiple   -> Time { O(n), θ(n), Ω(1) } and Space { O(1), θ(1), Ω(1) }

        result = n

        while result % (n * 2) != 0:
            result += 1

        return result
