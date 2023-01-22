class Solution:
    # countMatches  -> Time { O(n), θ(n), Ω(1) } and Space { O(1), θ(1), Ω(1) }

    def countMatches(self, items: list[list[str]], ruleKey: str, ruleValue: str) -> int:
        matches = 0

        for item in items:
            if ruleKey == "type":
                if item[0] == ruleValue:
                    matches += 1

            elif ruleKey == "color":
                if item[1] == ruleValue:
                    matches += 1

            elif ruleKey == "name":
                if item[2] == ruleValue:
                    matches += 1

        return matches
