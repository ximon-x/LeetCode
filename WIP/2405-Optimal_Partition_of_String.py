class Solution:
    def partitionString(self, s: str) -> int:
        answer = 1
        i = 0

        while i != len(s) - 1:
            for j in range(i + 1, len(s)):
                if s[i] == s[j]:
                    answer += 1
                    i = j
                    break

        return answer
