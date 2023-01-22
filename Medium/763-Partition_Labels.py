class Solution:
    # partitionLabels  -> Time { O(n), θ(n), Ω(1) } and Space { O(1), θ(1), Ω(1) }
    def partitionLabels(self, s: str) -> list[int]:
        answer = []

        while len(s):
            if s.count(s[0]) == 1:
                answer.append(len(s[0]))
                s = s[1:]

            else:
                end = s.rfind(s[0])
                i = 1

                while i < end:
                    curr_item_end = s.rfind(s[i])
                    if curr_item_end > end:
                        end = curr_item_end
                    i += 1
                answer.append(len(s[: end + 1]))
                s = s[end + 1 :]

        return answer
