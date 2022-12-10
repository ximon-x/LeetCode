class Solution:
    # maxProductDifference    -> Time { O(nLogn), θ(nLogn), Ω(nLogn) } and Space { O(1), θ(1), Ω(1) }

    def maxProductDifference(self, nums: List[int]) -> int:
        nums.sort()

        answer = (nums[0] * nums[1]) - (nums[-1] * nums[-2])
        return abs(answer) 

