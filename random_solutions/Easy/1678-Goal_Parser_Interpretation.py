class Solution:
    def interpret(self, command: str) -> str:
        # interpret -> Time { O(n), θ(n), Ω(n) } and Space { O(n), θ(n), Ω(n) }

        result = ""

        for i in range(len(command)):
            if command[i] == "G":
                result += "G"

            elif command[i] == "(" and command[i + 1] == ")":
                result += "o"

            elif command[i] == "(" and command[i + 1] == "a":
                result += "al"

            else:
                continue

        return result
