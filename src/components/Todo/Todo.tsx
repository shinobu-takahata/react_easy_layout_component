import Button from "../ui/Button";
import { useTodo } from "../../hooks/useTodo";

export default function MemoApp() {
  const {
    text,
    todos,
    handleTextChange,
    handleOnAddClick,
    handleCheckTodo,
    handleDeleteClick,
  } = useTodo();

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
            <Button name="追加" onClick={handleOnAddClick} />
          </div>
          <div>
            {todos.map((todo, index) => (
              <div key={index} className="grid grid-cols-2">
                <div>
                  <input
                    type="checkbox"
                    checked={todo.isDone}
                    onChange={() => {
                      handleCheckTodo(index);
                    }}
                  />
                  <span className="ml-2">{todo.todo}</span>
                </div>

                <div>
                  <Button
                    name="削除"
                    onClick={() => {
                      handleDeleteClick(index);
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
