import { useState } from "react";
import UserForm from "./components/NewUser/UserForm";
import UserList from "./components/Users/UserList";

function App() {
  const [userData, setUserData] = useState([]);
  const addUserHandler = (enteredUserData) => {
    setUserData((prevUserData) => {
      return [enteredUserData,...prevUserData];
    });
  };
  console.log(userData);
  return (
    <div>
      <UserForm onAddUser={addUserHandler} />
      <UserList userData={userData} />
    </div>
  );
}

export default App;
