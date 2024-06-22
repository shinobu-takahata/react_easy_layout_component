import { useState } from "react";

interface UseSwtichBackgloundColor {
  currentColor: string;
  handleCurrentColorIndex: () => void;
}
const COLORS = ["lightblue", "lightgreen", "lightpink", "lavender", "wheat"];

export function useSwtichBackgloundColor(): UseSwtichBackgloundColor {
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  const handleCurrentColorIndex = () => {
    setCurrentColorIndex((prevIndex) => (prevIndex + 1) % COLORS.length);
  };

  return {
    currentColor: COLORS[currentColorIndex],
    handleCurrentColorIndex,
  };
}
