class Solution:
    def createTargetArray(self, nums: list[int], index: list[int]) -> list[int]:
        # createTargetArray   -> Time { O(n), θ(n), Ω(n) } and Space { O(n), θ(n), Ω(n) }

        target = []

        for i in range(len(nums)):
            target.insert(
                index[i],
                nums[i],
            )

        return target
