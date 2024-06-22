import { useTextShowHidden } from "../../hooks/useTextShowHidden";
import Button from "../ui/Button";

export default function Switch() {
  const { isDisabled, handleClickDisabled, handleClickOpen } =
    useTextShowHidden();

  return (
    <div className="mx-auto max-w-4xl mt-10">
      <div className="flex justify-center">
        <div>
          {!isDisabled && (
            <h2 className="text-6xl mb-4 text-center">こんにちは</h2>
          )}

          <div className="flex justify-center gap-x-4">
            {/* イイ感じのbutton */}
            <Button name="表示" onClick={handleClickOpen} />
            <Button name="非表示" onClick={handleClickDisabled} />
          </div>
        </div>
      </div>
    </div>
  );
}
