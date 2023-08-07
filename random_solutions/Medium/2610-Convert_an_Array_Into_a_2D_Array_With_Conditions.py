class Solution:
    def findMatrix(self, nums: list[int]) -> list[list[int]]:
        # findMatrix    -> Time { O(log(n)), θ(log(n)), Ω(n) } and Space { O(n^2), θ(n^2), Ω(n^2) }

        answer = []
        while len(nums) != 0:
            inner = []
            leftover = []

            for i in range(len(nums)):
                if nums[i] not in inner:
                    inner.append(nums[i])

                else:
                    leftover.append(nums[i])

            answer.append(inner)
            nums = leftover

        return answer
