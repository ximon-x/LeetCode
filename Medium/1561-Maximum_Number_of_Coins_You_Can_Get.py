class Solution:
    def maxCoins(self, piles: list[int]) -> int:
        # Time { O(n), θ(n), Ω(n) } and Space { O(1), θ(1), Ω(1) }

        answer = 0
        piles.sort()

        for i in range(1, len(piles), 3):
            answer += piles[i]

        return answer
