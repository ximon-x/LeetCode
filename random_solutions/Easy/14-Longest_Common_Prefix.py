class Solution:
    # longestCommonPrefix   -> Time { O(n^2), θ(n^2), Ω(n) } and Space { O(1), θ(1), Ω(1) }

    def longestCommonPrefix(self, strs: list[str]) -> str | None:
        prefix = ""
        if len(strs) == 0:
            return None

        elif len(strs) == 1:
            return strs[0]

        elif prefix not in strs:
            for i in range(len(strs[0])):
                try:
                    for j in range(len(strs)):
                        if strs[0][i] != strs[j][i]:
                            return strs[0][:i]

                    prefix += strs[0][i]

                except IndexError:
                    return prefix

            return prefix

        else:
            return prefix
