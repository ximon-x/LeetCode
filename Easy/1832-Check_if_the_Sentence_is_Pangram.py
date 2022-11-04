class Solution:
    def checkIfPangram(self, sentence: str) -> bool:
        alphabets = list(string.ascii_lowercase)

        for letter in sentence:
            if letter in alphabets:
                alphabets.remove(letter)

        if len(alphabets) == 0:
            return True
        else:
            return False
