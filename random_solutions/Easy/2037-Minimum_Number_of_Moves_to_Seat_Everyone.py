class Solution:
    # minMovesToSeat    ->  Time { O(n), θ(n), Ω(1) } and Space { O(1), θ(1), Ω(1) }

    def minMovesToSeat(self, seats: list[int], students: list[int]) -> int:
        moves = 0

        students.sort()
        seats.sort()

        for i in range(len(students)):
            moves += abs(students[i] - seats[i])

        return moves
