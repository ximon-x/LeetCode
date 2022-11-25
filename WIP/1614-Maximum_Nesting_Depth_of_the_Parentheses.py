class Stack:
    items = []

    def init(self, item):
        items.push(item)

    def pop(self):
        if len(self.items) == 0:
            raise IndexError
        else:
            value = self.items[-1]
            del self.items[-1]
            return value

    def push(self, item)
        self.items.push(item)

    def peek(self):
        if len(self.items) == 0:
            raise IndexError
        else:
            return 
    
    def size(self)
        return len(self.items)

class Solution:
    def maxDepth(self, s: str) -> int:
        result = 0

        if len(s) == 0:
            return result

        else:
            values = Stack()

            for char in s:
                if char == "(":
                    values.push("(")
        

        return result

