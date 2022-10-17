class Solution:
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
