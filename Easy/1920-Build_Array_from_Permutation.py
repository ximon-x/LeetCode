class Solution:
    # buildArray    -> Time { O(n), θ(n), Ω(1) } and Space { O(n), θ(n), Ω(n) }

    def buildArray(self, nums: list[int]) -> list[int]:
        ans = []

        for i in nums:
            ans.append(nums[i])

        return ans
