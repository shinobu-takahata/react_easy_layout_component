import { useState } from "react";

interface UseTemperature {
  celSius: number;
  onCelsiusChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  convertFromCelsiusToFahrenheit: (celSius: number) => number;
}

export function useTemperature(): UseTemperature {
  const [celSius, setCelsius] = useState(0);

  function convertFromCelsiusToFahrenheit(celSius: number) {
    return (celSius * 9) / 5 + 32;
  }

  function onCelsiusChange(e: React.ChangeEvent<HTMLInputElement>) {
    setCelsius(parseInt(e.target.value));
  }
  return {
    celSius,
    onCelsiusChange,
    convertFromCelsiusToFahrenheit,
  };
}
