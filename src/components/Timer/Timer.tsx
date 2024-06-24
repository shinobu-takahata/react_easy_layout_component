import Button from "../ui/Button";
import { useTimer } from "../../hooks/useTimer";

export default function Timer() {
  const { timer, isActive, handleTimerButtonToggle } = useTimer();

  return (
    <div className="mx-auto max-w-4xl mt-10">
      <div className="flex justify-center">
        <div>
          <h3 className="text-center text-2xl">{timer}</h3>
          <div className="grid grid-cols-2 gap-4">
            <Button
              name={isActive ? "停止" : "開始"}
              onClick={handleTimerButtonToggle}
            />
            <Button name="リセット" />
          </div>
        </div>
      </div>
    </div>
  );
}
