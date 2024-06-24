import { useRandomQuotes } from "../../hooks/useRandomQuotes";

export default function RandomQuotes() {
  const { quote } = useRandomQuotes();
  return (
    <div className="mx-auto max-w-4xl mt-10">
      <div className="flex justify-center">
        <h3 className="text-center text-2xl">{quote}</h3>
      </div>
    </div>
  );
}
