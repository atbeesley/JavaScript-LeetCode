function convertTemperature(celsius: number): number[] {
    const kelvinTemp = celsius + 273.15;
    const fahrenheitTemp = celsius * 1.80 + 32.00;
    return [kelvinTemp, fahrenheitTemp];
};