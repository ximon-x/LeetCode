class Solution:
    def executeInstructions(self, n: int, startPos: list[int], s: str) -> list[int]:
        answer = []

        for i in range(len(s)):
            print(f"i is {i}")
            curr_pos = startPos
            good_steps = 0

            for j in range(i, len(s)):
                print(f"\tj is {j}")
                print(
                    f"\t Instruction is {s[j]} and grid is [{curr_pos[0]} x {curr_pos[1]}]"
                )

                match s[j]:
                    case "L":
                        curr_pos[1] -= 1
                        if curr_pos[1] < 0:
                            break
                        else:

                            good_steps += 1

                    case "R":
                        curr_pos[1] += 1
                        if curr_pos[1] > n - 1:
                            break
                        else:
                            good_steps += 1

                    case "U":
                        curr_pos[0] -= 1
                        if curr_pos[0] < 0:
                            break
                        else:
                            good_steps += 1

                    case "D":
                        curr_pos[0] += 1
                        if curr_pos[0] > n - 1:
                            break
                        else:
                            good_steps += 1

            answer.append(good_steps)
            print("\n")

        return answer


solution = Solution()
print(solution.executeInstructions(3, [0, 1], "RRDDLU"))

# Expected answer: [1, 5, 4, 3, 1, 0]
