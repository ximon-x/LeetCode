class Solution:
    def smallerNumbersThanCurrent(self, nums: List[int]) -> List[int]:
        # smallerNumbersThanCurrent -> Time { O(n^2), θ(n^2), Ω(n) } and Space { O(n), θ(n), Ω(n) }
        result = []

        for i in nums:
            smaller_counts = 0

            for j in nums:
                if j < i:
                    smaller_counts += 1

            result.append(smaller_counts)
        return result
