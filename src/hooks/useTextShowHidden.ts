import { useState } from "react";

interface UseTextShowHidden {
  isDisabled: boolean;
  handleClickDisabled: () => void;
  handleClickOpen: () => void;
}
export function useTextShowHidden(): UseTextShowHidden {
  const [isDisabled, setIsDisabled] = useState(false);
  const handleClickDisabled = () => {
    setIsDisabled(true);
  };
  const handleClickOpen = () => {
    setIsDisabled(false);
  };

  return {
    isDisabled,
    handleClickDisabled,
    handleClickOpen,
  };
}
