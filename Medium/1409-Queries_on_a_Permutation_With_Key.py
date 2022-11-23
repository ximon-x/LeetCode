class Solution:
    # processQueries    -> Time { O(n), θ(n), Ω(1) } and Space { O(n), θ(n), Ω(n) }

    def processQueries(self, queries: list[int], m: int) -> list[int]:
        p = list(range(1, m + 1))
        position = []

        for query in queries:
            ndx = p.index(query)
            position.append(ndx)

            value = p.pop(ndx)
            p.insert(0, value)

        return position
