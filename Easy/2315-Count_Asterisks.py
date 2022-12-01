class Solution:
    # countAsterisks   -> Time { O(n), θ(n), Ω(1) } and Space { O(1), θ(1), Ω(1) }

    def countAsterisks(self, s: str) -> int:
        count = 0
        pipeNumber = 0

        for i in range(len(s)):
            if s[i] == "|":
                pipeNumber += 1

            if pipeNumber % 2 == 0 and s[i] == "*":
                count += 1

        return count
