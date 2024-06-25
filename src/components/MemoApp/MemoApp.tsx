import { useMemoApp } from "../../hooks/useMemoApp";
import Button from "../ui/Button";

export default function MemoApp() {
  const { text, memos, handleTextChange, handleAddMemo, handleDeleteMemo } =
    useMemoApp();
  return (
    <div className="mx-auto max-w-4xl mt-10">
      <div className="flex justify-center">
        <div>
          <div>
            <input
              className="border outline-none px-3 py-2 rounded"
              type="text"
              placeholder="メモを入力"
              value={text}
              onChange={handleTextChange}
            />
            <Button name="追加" onClick={handleAddMemo} />
          </div>
          <div>
            {memos.map((memo, index) => (
              <div className="grid grid-cols-2">
                {memo}
                <div>
                  <Button
                    name="削除"
                    onClick={() => {
                      handleDeleteMemo(index);
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
