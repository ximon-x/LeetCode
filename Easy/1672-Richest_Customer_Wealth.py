import sys


class Solution:
    # maximumWealth   -> Time { O(n^2), θ(n^2), Ω(1) } and Space { O(1), θ(1), Ω(1) }

    def maximumWealth(self, accounts: list[list[int]]) -> int:
        max_wealth = -sys.maxsize - 1

        for i in range(len(accounts)):
            local_wealth = 0

            for j in range(len(accounts[i])):
                local_wealth += accounts[i][j]

            if local_wealth > max_wealth:
                max_wealth = local_wealth

        return max_wealth
