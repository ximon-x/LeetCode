class Solution:
    def cellsInRange(self, s: str):
        # restoreString   -> Time { O(2n), θ(2n), Ω(2n) } and Space { O(2n), θ(2n), Ω(2n) }

        col1, col2 = ord(s[0]), ord(s[3])
        row1, row2 = int(s[1]), int(s[4])

        result = []

        for i in range(col1, col2 + 1):
            for j in range(row1, row2 + 1):
                cell = chr(i) + str(j)
                result.append(cell)

        return result
