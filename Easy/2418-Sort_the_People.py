class Solution:
    # sortPeople    -> Time { O(n), θ(n), Ω(1) } and Space { O(n), θ(n), Ω(n) }

    def sortPeople(self, names: list[str], heights: list[int]) -> list[str]:
        n = len(names)
        data = {}
        result = []

        for i in range(n):
            data[heights[i]] = names[i]

        heights.sort(reverse=True)

        for i in range(n):
            result.append(data[heights[i]])

        return result
