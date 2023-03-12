class Solution:
    def countDistinctIntegers(self, nums: list[int]) -> int:
        # Time { O(2^n), θ(2^n), Ω(2^n) } and Space { O(nm), θ(nm), Ω(nm) }
        nums_copy = nums.copy()

        # Reversing the digits
        for num in nums_copy:
            str_num = str(num)
            str_num = str_num[::-1]
            nums.append(int(str_num))

        nums = list(set(nums))

        return len(nums)
