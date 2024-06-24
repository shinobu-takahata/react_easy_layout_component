import { useEffect, useState } from "react";

interface UseTrafficLight {
  currentTrafficLight: string;
}
const TRAFFIC_COLOR = ["green", "yellow", "red"];

export function useTrafficLight(): UseTrafficLight {
  const [currentTrafficIndex, setCurrentTrafficIndex] = useState(0);
  useEffect(() => {
    const interval = setTimeout(() => {
      setCurrentTrafficIndex((currentTrafficIndex + 1) % TRAFFIC_COLOR.length);
    }, 1000);
    return () => clearTimeout(interval);
  }, [currentTrafficIndex]);

  return {
    currentTrafficLight: TRAFFIC_COLOR[currentTrafficIndex],
  };
}
