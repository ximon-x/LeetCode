class Solution:
    def oneMinusZeros(self, grid: list[list[int]]) -> list[list[int]]:
        result = [[0] * len(grid[0])] * len(grid)

        ones_rows = [0] * len(grid)
        ones_columns = [0] * len(grid[0])

        zero_rows = [0] * len(grid)
        zero_columns = [0] * len(grid[0])

        # Store sums of all rows and columns in respective collection
        for i in range(len(grid)):
            for j in range(len(grid[0])):
                if grid[i][j] == 0:
                    zero_rows[i] += 1
                    zero_columns[j] += 1

                elif grid[i][j] == 1:
                    ones_rows[i] += 1
                    ones_columns[j] += 1

        # Perform Computation
        for i in range(len(grid)):
            for j in range(len(grid[0])):
                result[i][j] = (
                    ones_rows[i] + ones_columns[j] - zero_rows[i] - zero_columns[j]
                )

        # TODO: Fix computation logical bug

        return result


test = Solution()
print(test.oneMinusZeros([[0, 1, 1], [1, 0, 1], [0, 0, 1]]))
