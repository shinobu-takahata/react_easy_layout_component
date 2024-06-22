import { useState } from "react";

interface UseFeedback {
  inputValue: string;
  feedbackList: string[];
  handleInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleOnButtonClick: () => void;
}

export function useFeedback(): UseFeedback {
  const [inputValue, setInputValue] = useState("");
  const [feedbackList, setFeedbackList] = useState<string[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  const handleOnButtonClick = () => {
    if (inputValue.trim() !== "") {
      setFeedbackList((prevFeedbackList) => [...prevFeedbackList, inputValue]);
      setInputValue("");
    }
  };

  return {
    inputValue,
    feedbackList,
    handleInputChange,
    handleOnButtonClick,
  };
}
