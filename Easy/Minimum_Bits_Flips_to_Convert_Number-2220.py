class Solution:
    """
    minBitFlips -> Time { O(1), θ(1), Ω(1) } and Space { O(1), θ(1), Ω(1) }
    """

    def minBitFlips(self, start: int, goal: int) -> int:
        switches = str(bin(start ^ goal))
        return switches.count("1")
