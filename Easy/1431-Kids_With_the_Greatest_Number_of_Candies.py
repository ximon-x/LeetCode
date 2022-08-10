class Solution:
    # kidsWithCandies   -> Time { O(n), θ(n), Ω(1) } and Space { O(n), θ(n), Ω(1) }

    def kidsWithCandies(self, candies: list[int], extraCandies: int) -> list[bool]:
        max_candies = max(candies)
        result = []

        for candy in candies:
            if candy + extraCandies >= max_candies:
                result.append(True)
            else:
                result.append(False)

        return result
