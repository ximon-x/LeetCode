class Solution:
    # twoSum    -> Time { O(n^2), θ(n^2), Ω(n) } and Space { O(1), θ(1), Ω(1) }

    def twoSum(self, nums: list[int], target: int):
        for i in range(len(nums)):
            for j in range(i + 1, len(nums)):
                if nums[i] + nums[j] == target:
                    return [i, j]
