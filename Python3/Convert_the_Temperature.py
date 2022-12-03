class Solution:
    def convertTemperature(self, celsius: float) -> List[float]:
        kelvinTemp = celsius + 273.15;
        fahrenheitTemp = celsius * 1.80 + 32.00;
        return [kelvinTemp, fahrenheitTemp];
        