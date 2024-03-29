class Solution:
    def checkArithmeticSubarrays(
        self, nums: list[int], l: list[int], r: list[int]
    ) -> list[bool]:
        # checkArithmeticSubarrays    -> Time { O(n^2), θ(n^2), Ω(n) } and Space { O(1), θ(1), Ω(1) }

        result = []
        m = len(r)

        for i in range(m):
            curr_nums = nums[l[i] : r[i] + 1]
            curr_nums.sort()

            diff = curr_nums[1] - curr_nums[0]
            seq_flag = True

            for j in range(1, len(curr_nums)):
                if curr_nums[j] - curr_nums[j - 1] != diff:
                    seq_flag = False

            result.append(seq_flag)

        return result
