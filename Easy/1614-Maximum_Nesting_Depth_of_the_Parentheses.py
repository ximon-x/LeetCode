class Stack:
    items = []

    def init(self, item):
        self.items.push(item)

    def pop(self):
        if len(self.items) == 0:
            raise IndexError
        else:
            value = self.items[-1]
            del self.items[-1]
            return value

    def push(self, item):
        self.items.append(item)

    def peek(self):
        if len(self.items) == 0:
            raise IndexError
        else:
            return

    def size(self):
        return len(self.items)


class Solution:
    def maxDepth(self, s: str) -> int:
        values = Stack()
        result = 0

        if len(s) == 0:
            return result

        else:
            for char in s:
                if char == "(":
                    values.push("(")
                    result = max(result, values.size())

                elif char == ")":
                    values.pop()

        return result
