class Solution:
    def mostWordsFound(self, sentences: list[str]) -> int:
        max_words = 0

        for sentence in sentences:
            curr_max = len(sentence.split(" "))
            if curr_max > max_words:
                max_words = curr_max

        return max_words
