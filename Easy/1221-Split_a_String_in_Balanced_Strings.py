class Solution:
    def balancedStringSplit(self, s: str) -> int:
        balance = 0
        result = 0

        for i in range(len(s)):
            if s[i] == "L":
                balance += 1

            else:
                balance -= 1

            if i != 0 and balance == 0:
                result += 1

        return result
