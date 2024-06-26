import Button from "../ui/Button";
import { useSearchUser } from "../../hooks/userSearchUser";

export default function SearchUser() {
  const {
    userName,
    userAge,
    userFilter,
    filterdUsers,
    handleChangeUserName,
    handleChangeUserAge,
    handleChangeUserFilter,
    handleClickAddUser,
  } = useSearchUser();
  return (
    <div className="mx-auto max-w-4xl mt-10">
      <div className="flex justify-center">
        <div className="w-80">
          <h2 className="text-2xl font-bold">ユーザー検索</h2>

          {/* ユーザー追加フォーム */}
          <div className="mt-8">
            <h3 className="text-base">ユーザー追加フォーム</h3>
            <input
              className="mt-4 w-full rounded-md border px-3 py-2 outline-none"
              type="text"
              placeholder="ユーザー名"
              value={userName}
              onChange={handleChangeUserName}
            />
            <input
              className="mt-4 w-full rounded-md border px-3 py-2 outline-none"
              type="number"
              value={userAge}
              onChange={handleChangeUserAge}
            />
            <div>
              <Button name="追加" onClick={handleClickAddUser} />
            </div>
          </div>

          {/* ユーザー検索 */}
          <div className="mt-8">
            <input
              type="text"
              className="mt-4 w-full rounded-md border px-3 py-2 outline-none"
              value={userFilter}
              onChange={handleChangeUserFilter}
            />
            <div>
              {filterdUsers.map((user, index) => (
                <div key={index} className="grid grid-cols-2">
                  <p>{user.name}</p>
                  <p>{user.age}歳</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
