import { useState, useEffect } from "react";

interface UseRandomQuotes {
  quote: string;
}
const QUOTES = [
  // 適当な名言を何個か書いて
  "名言1",
  "名言2",
  "名言3",
  "名言4",
];
export function useRandomQuotes(): UseRandomQuotes {
  const [quote, setQuote] = useState("");
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * QUOTES.length);
    setQuote(QUOTES[randomIndex]);
  }, []);
  return {
    quote,
  };
}
