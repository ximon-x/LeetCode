class Solution:
    def findDuplicate(self, nums: list[int]) -> int:
        # Time { O(n), θ(n), Ω(n) } and Space { O(n), θ(n), Ω(n) }
        n = len(nums)
        count = [0] * (n + 1)

        for i in range(0, n):
            count[nums[i]] += 1
            if count[nums[i]] > 1:
                return nums[i]

        return 0
