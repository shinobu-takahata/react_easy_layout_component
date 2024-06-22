import Button from "../ui/Button";
import { useFeedback } from "../../hooks/useFeedback";

export default function Feedback() {
  const { inputValue, feedbackList, handleInputChange, handleOnButtonClick } =
    useFeedback();

  return (
    <div className="mt-8 mx-auto max-w-4xl">
      <div className="flex justify-center">
        <div>
          <textarea
            className="border px-3 py-2 rounded"
            placeholder="フィードバックを入力してください"
            value={inputValue}
            onChange={handleInputChange}
          ></textarea>
          <div className="flex justify-center">
            <Button name="送信する" onClick={handleOnButtonClick} />
          </div>
          <div className="mt-2">
            <ul>
              {feedbackList.map((feedback, index) => (
                <li key={index}>{feedback}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
