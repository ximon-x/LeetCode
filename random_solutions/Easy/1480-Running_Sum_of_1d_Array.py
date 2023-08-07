class Solution:
    # runningsum  -> Time { O(n), θ(n), Ω(1) } and Space { O(n), θ(n), Ω(1) }

    def runningSum(self, nums: list[int]) -> list[int]:
        total = 0
        total_list = []

        for num in nums:
            total += num
            total_list.append(total)

        return total_list
