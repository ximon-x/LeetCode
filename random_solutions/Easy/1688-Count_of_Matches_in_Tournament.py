class Solution:
    def numberOfMatches(self, n: int) -> int:
        # numberOfMatches  -> Time { O(log(n)), θ(log(n)), Ω(n) } and Space { O(1), θ(1), Ω(1) }

        result = 0

        while n != 1:
            result += n // 2

            if n % 2 == 0:
                n = int(n / 2)
            else:
                n = int((n - 1) / 2 + 1)

        return int(result)
