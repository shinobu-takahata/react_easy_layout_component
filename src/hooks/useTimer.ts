import { useEffect, useState } from "react";

interface UseTimer {
  timer: number;
  isActive: boolean;
  handleTimerButtonToggle: () => void;
}

export function useTimer(): UseTimer {
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (isActive) {
      const interval = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isActive]);

  const handleTimerButtonToggle = () => {
    setIsActive((prev) => !prev);
  };

  return {
    timer,
    isActive,
    handleTimerButtonToggle,
  };
}
