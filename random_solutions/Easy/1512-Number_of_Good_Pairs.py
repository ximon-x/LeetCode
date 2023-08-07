class Solution:
    # numIdenticalPairs   -> Time { O(n^2), θ(n^2), Ω(2n) } and Space { O(1), θ(1), Ω(1) }

    def numIdenticalPairs(self, nums: list[int]) -> int:
        good_pairs = 0

        for i in range(len(nums)):
            for j in range(i + 1, len(nums)):
                if nums[i] == nums[j]:
                    good_pairs += 1

        return good_pairs
