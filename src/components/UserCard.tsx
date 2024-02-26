import { useState } from "react";
import { IUser } from "../interface/userInterface";
// const [user, setUser] = useState < IUser > []([]);

const UserCard: React.FC<IUser> = ({ name }) => {
  // const [todos, setTodos] = useState<ITodo[]>([]);

  return <div>{name}</div>;
};

export default UserCard;
