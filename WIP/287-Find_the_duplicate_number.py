class Solution:
    def findDuplicate(self, nums: list[int]) -> int:
        for i in range (0, len(nums)):
            for j in range(i+1, len(nums)):
                if (nums[i] == nums[j]):
                    return nums[i]
