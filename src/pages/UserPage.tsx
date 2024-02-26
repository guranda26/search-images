import { useEffect, useState } from "react";
import { IUser } from "../interface/userInterface";

const UserPage: React.FC<{}> = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
      res.json().then((data: IUser[]) => setUsers(data))
    );
  }, []);

  return (
    <div>
      User Page
      <div>
        {users.map(({ name, username, address: { city } }) => (
          <>
            <h1>{name}</h1>
            <h2>{username}</h2>
            <span>Address: {city}</span>
          </>
        ))}
      </div>
    </div>
  );
};

export default UserPage;
