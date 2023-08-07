class Solution:
    def arrayStringsAreEqual(self, word1: list[str], word2: list[str]) -> bool:
        # arrayStringsAreEqual  ->  Time { O(n), θ(n), Ω(n) } and Space { O(n), θ(n), Ω(n) }

        string1 = ""
        string2 = ""

        for word in word1:
            string1 += word

        for word in word2:
            string2 += word

        return string1 == string2
