class Solution:
    # minimumSum    -> Time { O(n), θ(n), Ω(1) } and Space { O(1), θ(1), Ω(1) }

    def minimumSum(self, num: int) -> int:
        dig, num = [], str(num)

        for i in range(len(num)):
            dig.append(int(num[i]))

        dig.sort()

        num1 = dig[0] * 10 + dig[2]
        num2 = dig[1] * 10 + dig[3]

        return num1 + num2
