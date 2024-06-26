import { useMemo, useState } from "react";
interface Diary {
  title: string;
  content: string;
  date: string;
}
interface UseDiary {
  title: string;
  content: string;
  date: Date;
  diary: Diary[];
  filterdDiaryList: Diary[];
  handleChangeTitle: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeContent: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleChangeDate: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleClickAddButton: () => void;
}

const toLocaleDateString = (date: Date) => {
  return date.toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
};

export function useDiary(): UseDiary {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [date, setDate] = useState<Date>(new Date());
  const [diary, setDiary] = useState<Diary[]>([]);

  // titleやcontentが変わってしまっても毎回filterしないようにする
  const filterDate = useMemo(() => {
    return toLocaleDateString(date);
  }, [date]);
  const filterdDiaryList = useMemo(() => {
    return diary.filter((diary) => diary.date === filterDate);
  }, [diary, filterDate]);

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const handleChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };
  const handleChangeDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(new Date(e.target.value));
  };

  const handleClickAddButton = () => {
    if (!title || !content) return;

    // 今日の日付をyyyy-mm-dd形式にしてtodayに格納
    const today = toLocaleDateString(date);

    setDiary([...diary, { title, content, date: today }]);
    setTitle("");
    setContent("");
  };

  return {
    title,
    content,
    date,
    diary,
    filterdDiaryList,
    handleChangeTitle,
    handleChangeContent,
    handleChangeDate,
    handleClickAddButton,
  };
}
