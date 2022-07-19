class Solution:
    """
    generate    -> Time { O(n), θ(n), Ω(1) } and Space { O(1), θ(1), Ω(1) }
    pascalize   -> Time { O(n), θ(n), Ω(1) } and Space { O(1), θ(1), Ω(1) }
    """

    def generate(self, numRows: int) -> list[list[int]]:
        if numRows == 0:
            return []

        answer = [[1]]

        for i in range(numRows - 1):
            answer.append(self.pascalize(answer[i]))

        return answer

    def pascalize(self, items):
        response = []
        for i in range(len(items) + 1):
            if i == 0 or i == len(items):
                response.append(1)
            else:
                response.append(items[i] + items[i - 1])

        return response
