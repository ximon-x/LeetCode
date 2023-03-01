package leetcode

var (
	result = 0
	empty  = 1
	sx     int
	sy     int
	ex     int
	ey     int
)

func uniquePathsIII(grid [][]int) int {
	m := len(grid)
	n := len(grid[0])

	for i := 0; i < m; i++ {
		for j := 0; j < n; j++ {
			if grid[i][j] == 0 {
				empty++
			} else if grid[i][j] == 1 {
				sx = i
				sy = j
			}
		}
	}

	dfs(grid, sx, sy)

	return result
}

func dfs(grid [][]int, x int, y int) {
	if x < 0 || y < 0 {
		return
	} else if x >= len(grid) || y >= len(grid[0]) {
		return
	} else if grid[x][y] < 0 {
		return
	} else if grid[x][y] == 2 {
		if empty == 0 {
			result++
		}
		return
	}

	grid[x][y] = -2
	empty--

	dfs(grid, x+1, y)
	dfs(grid, x-1, y)
	dfs(grid, x, y+1)
	dfs(grid, x, y-1)

	grid[x][y] = 0
	empty++
}
