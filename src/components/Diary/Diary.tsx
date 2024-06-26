import Button from "../ui/Button";
import { useDiary } from "../../hooks/useDiary";

export default function Diary() {
  const {
    title,
    content,
    date,
    filterdDiaryList,
    handleChangeTitle,
    handleChangeContent,
    handleClickAddButton,
    handleChangeDate,
  } = useDiary();
  return (
    <div className="mx-auto max-w-4xl mt-10">
      <div className="flex justify-center">
        <div className="w-80">
          <h2 className="text-2xl font-bold">日記アプリ</h2>
          <div>
            <input
              className="mt-4 w-full rounded-md border px-3 py-2 outline-none"
              type="text"
              placeholder="タイトル"
              value={title}
              onChange={handleChangeTitle}
            />
            <textarea
              className="mt-4 w-full rounded-md border px-3 py-2 outline-none"
              name=""
              id=""
              placeholder="内容"
              value={content}
              onChange={handleChangeContent}
            />
            <div>
              <Button name="追加" onClick={handleClickAddButton} />
            </div>
          </div>

          {/* 日記フィルタ― */}
          <div className="flex justify-between items-center mt-4">
            <span className="text-base">日付フィルター</span>
            <input
              type="date"
              className="rounded-md border px-3 py-2 outline-none"
              value={date.toISOString().split("T")[0]}
              onChange={handleChangeDate}
            />
          </div>

          {/* 日記の表示 */}
          <div></div>
          <div className="mt-7">
            <h2 className="text-xl font-bold">日記一覧</h2>
            <ul>
              {
                // filterDateの日付のdiaryのみ表示
                filterdDiaryList.map((diary, index) => (
                  <li className="mt-4 rounded-md border p-4" key={index}>
                    <h3>{diary.title}</h3>
                    <p>{diary.content}</p>
                    <p>{diary.date}</p>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
