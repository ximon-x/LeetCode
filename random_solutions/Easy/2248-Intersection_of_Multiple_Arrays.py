class Solution:
    # intersection    -> Time { O(n), θ(n), Ω(1) } and Space { O(1), θ(1), Ω(1) }

    def intersection(self, nums: list[list[int]]) -> list[int]:

        result = set(nums[0])

        for num in nums[1:]:
            result.intersection_update(num)

        return sorted(result)
