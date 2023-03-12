class Solution:
    def maxCoins(self, piles: list[int]) -> int:
        # Time { O(n), θ(n), Ω(n) } and Space { O(1), θ(1), Ω(1) }

        answer = 0
        piles.sort()

        my_coins_num = int(len(piles) / 3)
        i = len(piles) - 2

        while my_coins_num != 0:
            answer += piles[i]
            my_coins_num -= 1
            i -= 2

        return answer
