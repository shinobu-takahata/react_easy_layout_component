import { useEffect, useState } from "react";

interface UseClock {
  currentTime: Date;
}

export function useClock(): UseClock {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return {
    currentTime,
  };
}
