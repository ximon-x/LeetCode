import itertools

class Solution:
    def findingUsersActiveMinutes(self, logs: list[list[int]], k: int) -> list[int]:
        result = [0] * k
        uniqueLogs = []

        logs.sort()

        for log in logs:
            if log not in uniqueLogs:
                uniqueLogs.append(log)

        for log in uniqueLogs:
            result[log[0]] += 1
            
        return result;

