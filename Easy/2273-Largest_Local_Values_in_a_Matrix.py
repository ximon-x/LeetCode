class Solution:
    def largestLocal(self, grid: List[List[int]]) -> List[List[int]]:
        answer = []

        # Find all pivots and make the current one the local_max
        for i in range(1, len(grid)-1):
            inner_answer = []

            for j in range(1, len(grid[i])-1):
                local_max = grid[i][j]
                
                # Iterate around pivot and find max value   
                for k in range(i-1, i+2):
                    for l in range(j-1, j+2): 
                        if grid[k][l] > local_max:
                            local_max = grid[k][l]

                inner_answer.append(local_max)
            answer.append(inner_answer)
        return answer
