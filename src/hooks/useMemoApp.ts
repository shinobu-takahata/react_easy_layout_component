import { useState } from "react";

interface UseMemoApp {
  text: string;
  memos: string[];
  handleTextChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleAddMemo: () => void;
  handleDeleteMemo: (index: number) => void;
}

export function useMemoApp(): UseMemoApp {
  const [text, setText] = useState("");
  const [memos, setMemos] = useState<string[]>([]);

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleAddMemo = () => {
    if (!text) return;
    setMemos([...memos, text]);
    setText("");
  };

  const handleDeleteMemo = (index: number) => {
    const newMemos = [...memos];
    newMemos.splice(index, 1);
    setMemos(newMemos);
  };

  return {
    text,
    memos,
    handleTextChange,
    handleAddMemo,
    handleDeleteMemo,
  };
}
