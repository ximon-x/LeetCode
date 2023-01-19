class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Stack:
    __items = []
    __top = -1

    def __init__(self, size: int) -> None:
        """
        Returns a new instance of a fixed size Stack and every element is set to None.
        =====   Time { O(n), θ(n), Ω(1) }   =====   Space { O(n), θ(n), Ω(n) }  =====
        """
        self.__items = [None] * size

    def pop(self):
        """
        Removes and Returns the top non-None element in the Stack and Errors if Stack is empty.
        =====   Time { O(1), θ(1), Ω(1) }   =====   Space { O(1), θ(1), Ω(1) }  =====
        """
        if self.__top == -1:
            raise IndexError("The Stack is Empty!")

        else:
            value = self.__items[self.__top]
            self.__items[self.__top] = None
            self.__top -= 1
            return value

    def push(self, item) -> None:
        """
        Appends the item to the next empty slot in the slack and Errors if Stack is full.
        =====   Time { O(1), θ(1), Ω(1) }   =====   Space { O(1), θ(1), Ω(1) }  =====
        """
        if self.__top == len(self.__items) - 1:
            raise IndexError("The Stack is Full!")

        else:
            self.__top += 1
            self.__items[self.__top] = item

    def peek(self):
        """
        Returns the top non-None element in the Stack and Errors if Stack is empty.
        =====   Time { O(1), θ(1), Ω(1) }   =====   Space { O(1), θ(1), Ω(1) }  =====
        """
        if self.__top == -1:
            raise IndexError("The Stack is Empty!")

        else:
            return self.__items[self.__top]

    def size(self):
        """
        Returns the number of elements in the Stack
        =====   Time { O(1), θ(1), Ω(1) }   =====   Space { O(1), θ(1), Ω(1) }  =====
        """
        return self.__top + 1

    def __len__(self) -> int:
        """
        Returns the size of the Stack.
        =====   Time { O(1), θ(1), Ω(1) }   =====   Space { O(1), θ(1), Ω(1) }  =====
        """
        return len(self.__items)
