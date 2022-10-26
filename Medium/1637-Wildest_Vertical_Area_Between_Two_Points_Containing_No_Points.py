from operator import itemgetter


class Solution:

    def maxWidthOfVerticalArea(self, points: list[list[int]]):
        sorted_list = sorted(points, key=itemgetter(0))
        print(sorted_list)

        max_width = 0
        for i in range(len(sorted_list)):
            curr_width = sorted_list[i][0] - sorted_list[i - 1][0]

            if curr_width > max_width:
                max_width = curr_width

        return max_width
