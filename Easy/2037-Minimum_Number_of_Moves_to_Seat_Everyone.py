class Solution:
    # minMovesToSeat    ->  Time { O(n), θ(n), Ω(1) } and Space { O(1), θ(1), Ω(1) }

    def minMovesToSeat(self, seats: List[int], students: List[int]) -> int:
        moves = 0

        students.sort()
        seats.sort()

        for i in range(len(students)):
            moves += abs(students[i] - seats[i])

        return moves
