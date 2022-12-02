class Solution:
    # truncateSentence   -> Time { O(n), θ(n), Ω(1) } and Space { O(1), θ(1), Ω(1) }

    def truncateSentence(self, s: str, k: int) -> str:
        words = s.split(" ")

        words = words[:k]

        result = ""

        for word in words: 
            result += word + " "

        return result[:-1]
