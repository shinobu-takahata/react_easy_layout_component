import { useTrafficLight } from "../../hooks/useTrafficLight";

export default function TrafficLight() {
  const { currentTrafficLight } = useTrafficLight();

  return (
    <div className="mx-auto max-w-4xl mt-10">
      <div className="flex justify-center">
        <h3 className="text-center text-2xl">
          <span
            className={`inline-block w-8 h-8 rounded-full mr-2 ${
              currentTrafficLight === "green" ? "bg-green-500" : "bg-green-200"
            }`}
          ></span>
          <span
            className={`inline-block w-8 h-8 rounded-full mr-2 ${
              currentTrafficLight === "yellow"
                ? "bg-yellow-500"
                : "bg-yellow-200"
            }`}
          ></span>
          <span
            className={`inline-block w-8 h-8 rounded-full mr-2 ${
              currentTrafficLight === "red" ? "bg-red-500" : "bg-red-200"
            }`}
          ></span>
        </h3>
      </div>
    </div>
  );
}
