import { useState } from "react";
import UserForm from "./components/Users/UserForm";
import UserList from "./components/Users/UserList";

function App() {
  const [userData, setUserData] = useState([]);
  const addUserHandler = (enteredUserData) => {
    setUserData((prevUserData) => {
      return [enteredUserData, ...prevUserData];
    });
  };
  console.log(userData);
  return (
    <>
      <UserForm onAddUser={addUserHandler} />
      <UserList userData={userData} />
    </>
  );
}

export default App;
