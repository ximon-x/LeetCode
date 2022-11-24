class Solution:
    # uniqueMorseRepresentations    -> Time { O(n^2), θ(n^2), Ω(n) } and Space { O(n), θ(n), Ω(1) }

    def uniqueMorseRepresentations(self, words: list[str]) -> int:
        morse_alphabets = {
            "a": ".-",
            "b": "-...",
            "c": "-.-.",
            "d": "-..",
            "e": ".",
            "f": "..-.",
            "g": "--.",
            "h": "....",
            "i": "..",
            "j": ".---",
            "k": "-.-",
            "l": ".-..",
            "m": "--",
            "n": "-.",
            "o": "---",
            "p": ".--.",
            "q": "--.-",
            "r": ".-.",
            "s": "...",
            "t": "-",
            "u": "..-",
            "v": "...-",
            "w": ".--",
            "x": "-..-",
            "y": "-.--",
            "z": "--..",
        }
        translated_words = []

        for word in words:
            translation = ""
            for i in range(len(word)):
                translation += morse_alphabets[word[i]]

            if translation not in translated_words:
                translated_words.append(translation)

        return len(translated_words)
