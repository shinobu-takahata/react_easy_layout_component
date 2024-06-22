import { useState } from "react";

interface UseQuiz {
  userChoice: string;
  result: string;
  handleChoice: (choice: string) => void;
  handleSubmit: () => void;
}

const CORRECT_ANSWER = "ライブラリ";
export function useQuiz(): UseQuiz {
  const [userChoice, setUserChoice] = useState("");
  const [result, setResult] = useState("");

  const handleChoice = (choice: string) => {
    setUserChoice(choice);
  };

  const handleSubmit = () => {
    if (userChoice === CORRECT_ANSWER) {
      setResult("正解です！");
    } else {
      setResult("不正解です！");
    }
  };

  return {
    userChoice,
    result,
    handleChoice,
    handleSubmit,
  };
}
