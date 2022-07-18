class Solution:
    def largestAltitude(self, gain: list[int]) -> int:
        altitudes = [0]
        highest_altitude = 0
        
        for i in range(len(gain)):
            altitudes.append(altitudes[-1] + gain[i])
        
        for j in range(1, len(altitudes)):
            if altitudes[j] > highest_altitude:
                highest_altitude = altitudes[j]
        
        return highest_altitude