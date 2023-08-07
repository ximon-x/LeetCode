class Solution:
    # mostWordsFound    -> Time { O(n), θ(n), Ω(1) } and Space { O(1), θ(1), Ω(1) }

    def mostWordsFound(self, sentences: list[str]) -> int:
        max_words = 0

        for sentence in sentences:
            curr_max = len(sentence.split(" "))
            if curr_max > max_words:
                max_words = curr_max

        return max_words
