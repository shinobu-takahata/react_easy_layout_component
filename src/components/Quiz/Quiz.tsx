import Button from "../ui/Button";
import SelectedButton from "../ui/SelectedButton";
import { useQuiz } from "../../hooks/useQuiz";
const QUESTION = "Reactはどのようなものですか？";
const CHOICE = ["ライブラリ", "フレームワーク", "言語", "データベース"];

export default function Quiz() {
  const { userChoice, result, handleChoice, handleSubmit } = useQuiz();

  return (
    <div className="mx-auto max-w-4xl mt-10">
      <div className="flex justify-center">
        <div>
          <h3 className="text-center text-2xl">{QUESTION}</h3>
          <div className="mt-4 flex gap-x-2 justify-center">
            {CHOICE.map((choice, index) => (
              <div key={index} className="flex items-center gap-x-2">
                {userChoice === choice ? (
                  <SelectedButton name={choice} />
                ) : (
                  <Button name={choice} onClick={() => handleChoice(choice)} />
                )}
              </div>
            ))}
          </div>
          <div className="mt-4 flex justify-center">
            <Button name="送信" onClick={handleSubmit} />
          </div>

          <h3 className="mt-8 text-center text-4xl">{result}</h3>
        </div>
      </div>
    </div>
  );
}
