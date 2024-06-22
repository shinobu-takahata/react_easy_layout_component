import { useState } from "react";

interface UseRealTimeText {
  text: string;
  handleTextOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function useRealTimeText(): UseRealTimeText {
  const [text, setText] = useState("");

  const handleTextOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(() => e.target.value);
  };

  return { text, handleTextOnChange };
}
