import string


class Solution:
    def decodeMessage(self, key: str, message: str) -> str:
        alphabets = list(string.ascii_lowercase)
        alphabets_pointer = 0
        keyMap = {}
        response = ""

        for letter in key:
            if letter == " ":
                continue

            elif alphabets_pointer > 25:
                break

            elif letter in keyMap:
                continue

            else:
                keyMap[letter] = alphabets[alphabets_pointer]
                alphabets_pointer += 1

        for val in message:
            if val == " ":
                response += " "

            else:
                response += keyMap[val]

        return response
