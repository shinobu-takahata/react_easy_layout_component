import { useTemperature } from "../../hooks/useTemperature";
export default function Temperature() {
  const { celSius, convertFromCelsiusToFahrenheit, onCelsiusChange } =
    useTemperature();
  return (
    <div className="mt-8 mx-auto max-w-4xl">
      <div className="flex justify-center">
        <div>
          <div className="flex items-center">
            <label htmlFor="celsius">摂氏温度：</label>
            <input
              id="celsius"
              className="border"
              type="number"
              value={celSius}
              onChange={onCelsiusChange}
            />
          </div>
          <p id="fahrenheit">
            華氏温度：{convertFromCelsiusToFahrenheit(celSius)}
          </p>
        </div>
      </div>
    </div>
  );
}
