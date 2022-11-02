class Solution:
    def largestLocal(self, grid: List[List[int]]) -> List[List[int]]:
        for i in range(1, len(grid)-1):
            for j in range(1, len(grid[i])-1):
                # Assigning current pivot as the current max
                local_max = grid[i][j]

                # Iterate around pivot and add max value to max_local



