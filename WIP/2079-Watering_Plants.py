class Solution:
    def wateringPlants(self, plants: list[int], capacity: int) -> int:
        # Problems:
        # You need to track the position of the waterer at all times.
        # You need to track the capacity of the can at all times.
        # The solution can be 0(n)

        # Problem simplified:
        # Walk to plant 0,
        #       if plant[0] < capacity:
        #               reduce capacity by plant[0]

        # Possible Solution:

        steps = 0
        distance = 0

        for i in range(len(plants)):
            print(i)
            continue

        return steps


test = Solution()
print(test.wateringPlants(plants=[2, 2, 3, 3], capacity=5))
