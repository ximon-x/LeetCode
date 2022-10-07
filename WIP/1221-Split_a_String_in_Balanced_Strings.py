class solution:
    def balancedStringSplit(self, s: str) -> int:
        pr = 0
        pl = 0
        result = []

        for i in range(len(s)):
            if s[i] == "R":
                pr += 1

            else:
                pl += 1

        return len(result)


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

