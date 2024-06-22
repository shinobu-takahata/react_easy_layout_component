import { useClock } from "../../hooks/useClock";
export default function Clock() {
  const { currentTime } = useClock();
  return (
    <div className="mx-auto max-w-4xl mt-10">
      <div className="flex justify-center">
        <h3 className="text-center text-2xl">
          {currentTime.toLocaleTimeString()}
        </h3>
      </div>
    </div>
  );
}
