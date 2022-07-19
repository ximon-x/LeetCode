class Solution:
    # removeDuplicates  -> Time { O(n), θ(n), Ω(1) } and Space { O(1), θ(1), Ω(1) }

    def removeDuplicates(self, nums: list[int]) -> int:
        i = 0

        for j in range(1, len(nums)):
            if nums[i] != nums[j]:
                i += 1
                nums[i] = nums[j]

        return i + 1
