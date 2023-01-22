class Solution:
    def convertTemperature(self, celsius: float) -> list[float]:
        # convertTemperature    ->  Time { O(1), θ(1), Ω(1) } and Space { O(1), θ(1), Ω(1) }

        return [round(celsius + 273.15, 5), round(celsius * 1.80 + 32.00)]
