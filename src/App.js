import { useState } from "react";
import UserForm from "./components/Users/UserForm";
import UserList from "./components/Users/UserList";
import Wrapper from "./components/Helpers/Wrapper";

function App() {
  const [userData, setUserData] = useState([]);
  const addUserHandler = (enteredUserData) => {
    setUserData((prevUserData) => {
      return [enteredUserData, ...prevUserData];
    });
  };
  console.log(userData);
  return (
    <Wrapper>
      <UserForm onAddUser={addUserHandler} />
      <UserList userData={userData} />
    </Wrapper>
  );
}

export default App;
