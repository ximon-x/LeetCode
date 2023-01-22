class Solution:
    def findCenter(self, edges: list[list[int]]) -> int:
        # findCenter    ->  Time { O(n), θ(n), Ω(1) } and Space { O(1), θ(1), Ω(1) }

        item = set(edges[0])

        for i in range(1, len(edges)):
            item = set(edges[i]) & set(item)

        item = list(item)

        return item[0]
