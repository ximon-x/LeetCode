class Solution:
    # minPairSum    -> Time { O(n), θ(n), Ω(1) } and Space { O(1), θ(1), Ω(1) }

    def minPairSum(self, nums:  list[int]) -> int:
        nums.sort()
        end = len(nums) - 1
        max_sum = 0
        
        for i in range(0, len(nums) // 2):
            curr_sum = nums[i] + nums[end - i]

            if curr_sum > max_sum:
                max_sum = curr_sum

        return max_sum
