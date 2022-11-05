class Solution:
    def arithmeticTriplets(self, nums: List[int], diff: int) -> int:
        triplets = 0

        for i in range(0, len(nums)):
            for j in range(i, len(nums)):
                for k in range(j, len(nums)):
                    if nums[k] - nums[j] == diff and nums[j] - nums[i] == diff:
                        triplets += 1

        return triplets
