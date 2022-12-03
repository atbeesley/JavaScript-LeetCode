class Solution(object):
    def convertTemperature(self, celsius):
        kelvinTemp = celsius + 273.15;
        fahrenheitTemp = celsius * 1.80 + 32.00;
        return [kelvinTemp, fahrenheitTemp];
        