class Solution:
    def wateringPlants(self, plants: list[int], capacity: int) -> int:
        # wateringPlants ->    Time { O(n), θ(n), Ω(n) } and Space { O(1), θ(1), Ω(1) }

        steps = 0
        can = capacity

        for i in range(len(plants)):
            if can < plants[i]:
                steps += i * 2
                can = capacity
            can -= plants[i]

        return steps + len(plants)
