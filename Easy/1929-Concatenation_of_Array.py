class Solution:
    # getConcatenation  -> Time { O(1), θ(1), Ω(1) } and Space { O(1), θ(1), Ω(1) }

    def getConcatenation(self, nums: list[int]) -> list[int]:
        return nums + nums
