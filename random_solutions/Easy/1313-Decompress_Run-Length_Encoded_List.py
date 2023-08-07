class Solution:
    # decompressRLElist  -> Time { O(n!), θ(n * m), Ω(n) } and Space { O(n!), θ(n!), Ω(n!) }

    def decompressRLElist(self, nums: list[int]) -> list[int]:
        result = []

        for i in range(0, len(nums), 2):
            freq = nums[i]
            val = nums[i + 1]

            j = 0

            while j < freq:
                result.append(val)
                j += 1

        return result
