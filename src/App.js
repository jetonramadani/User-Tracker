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
    <React.Fragment>
      <AddUser onAddUser={userAddHandler} />
      <UserList users={users} />
    </React.Fragment>
  );
}

export default App;
