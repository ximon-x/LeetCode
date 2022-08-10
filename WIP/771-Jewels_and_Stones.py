class Solution:
    def numJewelsInStones(self, jewels: str, stones: str) -> int:
        number_of_jewels = 0
        
        for stone in stones:
            if stone in jewels:
                number_of_jewels += 1
        
        return number_of_jewels
        