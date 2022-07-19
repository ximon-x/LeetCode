class Solution:
    # romanToInt   -> Time { O(n), θ(n), Ω(1) } and Space { O(1), θ(1), Ω(1) }

    def romanToInt(self, s: str) -> int:
        answer = 0
        values: dict = {"I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000}

        for i in range(len(s)):
            if i != len(s) - 1 and values[s[i]] < values[s[i + 1]]:
                answer += values[s[i + 1]] - values[s[i]]
            elif i != 0 and values[s[i]] > values[s[i - 1]]:
                pass
            else:
                answer += values[s[i]]

        return answer
