class Solution:
    # shuffle   -> Time { O(n), θ(n), Ω(1) } and Space { O(2n), θ(2n), Ω(n) }

    def shuffle(self, nums: list[int], n: int) -> list[int]:

        i = 0
        j = n

        result = []

        for i in range(n):
            result.append(nums[i])
            result.append(nums[j])
            j += 1

        return result
