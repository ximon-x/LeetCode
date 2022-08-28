class Solution:
    def restoreString(self, s: str, indices: list[int]) -> str:
        # restoreString   -> Time { O(2n), θ(2n), Ω(2n) } and Space { O(2n), θ(2n), Ω(2n) }

        temp = [None] * len(s)
        result = ""

        for i in range(len(indices)):
            temp[indices[i]] = s[i]

        for tem in temp:
            result += tem

        return result
