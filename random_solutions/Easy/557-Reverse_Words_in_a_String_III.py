class Solution:
    # reverseWords    -> Time { O(n^2), θ(n^2), Ω(n) } and Space { O(1), θ(1), Ω(1) }

    def reverseWords(self, s: str) -> str:
        words = s.split(" ")
        result = ""

        for word in words:
            reversed_word = ""

            for i in range(len(word) - 1, 0, -1):
                reversed_word += word[i]

            result += reversed_word + " "

        return word[:1]
