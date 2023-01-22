class Solution:
    # sortSentence  -> Time { O(n^2), θ(n^2), Ω(n) } and Space { O(1), θ(1), Ω(1) }

    def sortSentence(self, s: str) -> str:
        answer = ""
        words = s.split(" ")

        for i in range(len(words)):
            for word in words:
                if int(word[-1]) == i + 1:
                    word = word[:-1]
                    answer += word
                    answer += " "

        answer = answer[:-1]
        return answer
