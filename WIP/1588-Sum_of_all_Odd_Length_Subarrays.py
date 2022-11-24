class Solution:
    def sumOddLengthSubarrays(self, arr: List[int]) -> int:
        sum = 0

        for i in range(1, len(arr) + 1, 2):
            for j in range(0, len(arr)):
                if j + i >= len(arr):
                    break

                for k in range(0, i):
                    sum += arr[j + k]

        return sum
