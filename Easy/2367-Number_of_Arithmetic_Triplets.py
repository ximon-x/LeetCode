class Solution:
    def arithmeticTriplets(self, nums: list[int], diff: int) -> int:
        # arithmeticTriplets    -> Time { O(n^3), θ(n^3), Ω(n^3) } and Space { O(1), θ(1), Ω(1) }

        triplets = 0

        for i in range(0, len(nums)):
            for j in range(i, len(nums)):
                for k in range(j, len(nums)):
                    if nums[k] - nums[j] == diff and nums[j] - nums[i] == diff:
                        triplets += 1

        return triplets
