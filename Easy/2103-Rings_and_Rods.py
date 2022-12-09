class Solution:
    # countPoints    -> Time { O(n), θ(n), Ω(n) } and Space { O(1), θ(1), Ω(1) }
    def countPoints(self, rings: str) -> int:
        perfect_rods = 0
        rods = {
            "0": "",
            "1": "",
            "2": "",
            "3": "",
            "4": "",
            "5": "",
            "6": "",
            "7": "",
            "8": "",
            "9": "",
        }

        for i in range(0, len(rings), 2):
            rods[rings[i + 1]] += rings[i]

        for key in rods.keys():
            if "R" in rods[key] and "G" in rods[key] and "B" in rods[key]:
                perfect_rods += 1

        return perfect_rods
