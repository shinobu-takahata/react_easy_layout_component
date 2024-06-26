import { useMemo, useState } from "react";
interface User {
  name: string;
  age: number;
}

interface UseSearchUser {
  userName: string;
  userAge: number;
  users: User[];
  userFilter: string;
  filterdUsers: User[];
  handleChangeUserName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeUserAge: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeUserFilter: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleClickAddUser: () => void;
}

export function useSearchUser(): UseSearchUser {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState(0);
  const [users, setUsers] = useState<User[]>([]);
  const [userFilter, setUserFilter] = useState("");
  const filterdUsers = useMemo(
    () => users.filter((user) => user.name.includes(userFilter)),
    [users, userFilter]
  );

  const handleChangeUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };
  const handleChangeUserAge = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserAge(Number(e.target.value));
  };
  const handleChangeUserFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserFilter(e.target.value);
  };

  const handleClickAddUser = () => {
    if (!userName) return;
    setUsers((prevUsers) => [...prevUsers, { name: userName, age: userAge }]);
    setUserName("");
    setUserAge(0);
  };

  return {
    userName,
    userAge,
    users,
    userFilter,
    filterdUsers,
    handleChangeUserName,
    handleChangeUserAge,
    handleChangeUserFilter,
    handleClickAddUser,
  };
}
