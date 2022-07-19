class Solution:
    # search  -> Time { O(log n), θ(log n), Ω(1) } and Space { O(1), θ(1), Ω(1) }

    def search(self, nums: list[int], target: int) -> int:
        left, right = 0, len(nums) - 1
        while left <= right:
            pivot = left + (right - left) // 2
            if nums[pivot] == target:
                return pivot
            if target < nums[pivot]:
                right = pivot - 1
            else:
                left = pivot + 1
        return -1
