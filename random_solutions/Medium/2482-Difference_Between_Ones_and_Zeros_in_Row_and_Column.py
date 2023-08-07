class Solution:
    # onesMinusZeros  -> Time { O(n^2), θ(n^2), Ω(n^2) } and Space { O(n), θ(n), Ω(n) }

    def onesMinusZeros(self, grid: list[list[int]]) -> list[list[int]]:
        ones_rows = [0] * len(grid)
        ones_columns = [0] * len(grid[0])

        zero_rows = [0] * len(grid)
        zero_columns = [0] * len(grid[0])

        answer = []

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
            row = []

            for j in range(len(grid[0])):
                col = ones_rows[i] + ones_columns[j] - zero_rows[i] - zero_columns[j]

                row.append(col)
            answer.append(row)

        return answer
