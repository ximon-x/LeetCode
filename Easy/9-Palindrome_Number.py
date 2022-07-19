class Solution:
    # isPalindrome    -> Time { O(n), θ(n), Ω(1) } and Space { O(1), θ(1), Ω(1) }

    def isPalindrome(self, x: int) -> bool:
        x, n = str(x), len(str(x)) - 1
        is_palindrome = True

        for i in range(len(x)):
            if x[i] == x[n] and i != n:
                n -= 1
                continue

            elif x[i] == x[n] and i == n:
                break

            elif x[i] == x[n] and i > n:
                break

            else:
                is_palindrome = False

        return is_palindrome
