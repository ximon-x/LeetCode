import string


class Solution:
    # checkIfPangram -> Time { O(n), θ(n), Ω(1) } and Space { O(1), θ(1), Ω(1) }

    def checkIfPangram(self, sentence: str) -> bool:
        alphabets = list(string.ascii_lowercase)

        for letter in sentence:
            if letter in alphabets:
                alphabets.remove(letter)

        if len(alphabets) == 0:
            return True
        else:
            return False
