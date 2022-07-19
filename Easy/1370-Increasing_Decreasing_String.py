import collections


class Solution:
    """
    sortString  -> Time { O(n), θ(n), Ω(1) } and Space { O(n), θ(n), Ω(1) }
    """

    def sortString(self, s: str) -> str:
        count = collections.Counter(s)
        res = []

        chrs = [""] * 52
        for i in range(26):
            chrs[i] = chrs[~i] = chr(i + 97)

        remaining = True
        while remaining:
            remaining = False

            for c in chrs:
                if count[c] == 0:
                    continue
                res.append(c)
                count[c] -= 1
                remaining = True

        return "".join(res)
