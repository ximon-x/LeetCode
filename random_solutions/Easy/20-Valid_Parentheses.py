class Stack:
    # push  -> Time { O(1), θ(1), Ω(1) } and Space { O(1), θ(1), Ω(1) }
    # pop   -> Time { O(1), θ(1), Ω(1) } and Space { O(1), θ(1), Ω(1) }
    # size  -> Time { O(1), θ(1), Ω(1) } and Space { O(1), θ(1), Ω(1) }
    # peek  -> Time { O(1), θ(1), Ω(1) } and Space { O(1), θ(1), Ω(1) }

    def __init__(self):
        self.items = []
        self.TOP = -1

    def push(self, data):
        self.items.append(data)
        self.TOP += 1

    def pop(self):
        self.items.pop(self.TOP)
        self.TOP -= 1

    def size(self) -> int:
        return len(self.items)

    def peek(self):
        return self.items[self.TOP]


class Solution:
    # isValid    -> Time { O(n), θ(n), Ω(1) } and Space { O(1), θ(1), Ω(1) }
    def isValid(self, s: str) -> bool:
        st = Stack()

        for i in s:
            if i == "{" or i == "[" or i == "(":
                st.push(i)

            else:
                if st.size() == 0:
                    return False
                top = st.peek()

                if top == "(" and i == ")":
                    st.pop()

                elif top == "{" and i == "}":
                    st.pop()

                elif top == "[" and i == "]":
                    st.pop()

                else:
                    return False

        return st.size() == 0
