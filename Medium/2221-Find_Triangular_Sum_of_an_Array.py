class Solution:
    def triangularSum(self, nums: list[int]) -> int:
        # Time { O(n^2), θ(n^2), Ω(n^2) } and Space { O(n), θ(n), Ω(n) }

        while len(nums) != 1:
            nums = self.arrCreator(nums)

        return nums[0]

    def arrCreator(self, nums: list[int]) -> list[int]:
        newNums = []

        for i in range(1, len(nums)):
            newNums.append((nums[i] + nums[i - 1]) % 10)

        return newNums
