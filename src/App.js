import React, {useState} from "react";

import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";
import Wrapper from "./components/Helpers/Wrapper";

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
    <Wrapper>
      <AddUser onAddUser={userAddHandler} />
      <UserList users={users} />
    </Wrapper>
  );
}

export default App;
