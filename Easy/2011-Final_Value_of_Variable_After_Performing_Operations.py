class Solution:
    # finalValueAfterOperations -> Time { O(n), θ(n), Ω(1) } and Space { O(1), θ(1), Ω(1) }

    def finalValueAfterOperations(self, operations: list[str]) -> int:
        x = 0

        for operation in operations:
            match operation:
                case "--X":
                    x -= 1
                case "X--":
                    x -= 1
                case "++X":
                    x += 1
                case "X++":
                    x += 1
                case default:
                    continue

        return x
