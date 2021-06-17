import React, {useState} from "react";

import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {
  const [users, setUsers] = useState([]);
  const userAddHandler = (user) => {
    setUsers((previous) => {
      return [
        ...previous,
        {
          id: Math.random().toString(),
          ...user,
        },
      ];
    });
  };
  return (
    <div>
      <AddUser onAddUser={userAddHandler} />
      <UserList users={users} />
    </div>
  );
}

export default App;
