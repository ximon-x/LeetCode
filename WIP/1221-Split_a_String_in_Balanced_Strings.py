class solution:
    def __init__(self):
        self.pointer_r = 0
        self.pointer_l = 0
        self.curr_num_r = 0
        self.curr_num_l = 0
        self.result = []

    def balancedStringSplit(self, s: str) -> int:
        pass


"""
Problem: Split string into balanced Substrings

Solution 1:
    1. Create 2 pointers, set them both to 0
    2. Traverse linearly with the "R" pointer until a "L" is encountered
    3. Keep track of the number of "R" encountered in a variable
    4. Traverse linearly with the "L" pointer from the current location of
        pointer "R" until a "R" is encountered
    5. Keep track of the number of "L" encountered in a variable
    6. Compare number of "R" to number of "L", if equal, result.append(str("R" * numR + "L" * numR))

Current Hindrances:
    1. How to traverse with the pointers correctly
"""

