import { useState } from "react";

export default function RealTimeText() {
  const [text, setText] = useState("");

  const handleTextOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(() => e.target.value);
  };

  return (
    <div className="mx-auto max-w-4xl mt-10">
      <div className="flex justify-center">
        <div>
          <h2 className="mb-4 texet-center text-6xl">{text}</h2>
          <div className="flex justify-center">
            <input
              className="border px-3 py-2"
              type="text"
              value={text}
              onChange={handleTextOnChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
