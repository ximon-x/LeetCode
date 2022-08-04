class Solution:
    def shuffle(self, nums: list[int], n: int) -> list[int]:

        i = 0
        j = n

        result = []

        for i in range(n):
            result.append(nums[i])
            result.append(nums[j])
            j += 1

        return result
