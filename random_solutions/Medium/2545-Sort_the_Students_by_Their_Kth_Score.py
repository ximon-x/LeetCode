from operator import itemgetter


class Solution:
    # Time { O(nlogn), θ(nlogn), Ω(nlogn) } and Space { O(1), θ(1), Ω(1) }
    def sortTheStudents(
        self, score: list[list[int]], k: int
    ) -> list[list[int]]:
        answer = sorted(score, key=itemgetter(k), reverse=True)

        return answer
