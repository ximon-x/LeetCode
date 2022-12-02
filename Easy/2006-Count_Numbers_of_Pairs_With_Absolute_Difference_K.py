class Solution:
    # countKDifference    -> Time { O(n^2), θ(n^2), Ω(n) } and Space { O(1), θ(1), Ω(1) }

    def countKDifference(self, nums: List[int], k: int) -> int:
        count = 0

        for i in range(len(nums)):
            for j in range(i, len(nums)):
                if abs(nums[j] - nums[i]) == k:
                    count += 1

        return count

