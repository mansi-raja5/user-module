import { useState, useEffect } from "react";
import Header from "./components/UI/Header";
import UserForm from "./components/Users/UserForm";
import UserList from "./components/Users/UserList";

function App() {
  const [userData, setUserData] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedInInfo = localStorage.getItem("isLoggedIn");
    console.log(loggedInInfo);
    if (+loggedInInfo === 1) {
      console.log(loggedInInfo);

      setIsLoggedIn(true);
    }
  }, []);

  const addUserHandler = (enteredUserData) => {
    setUserData((prevUserData) => {
      return [enteredUserData, ...prevUserData];
    });
  };

  const signInHandler = () => {
    localStorage.setItem("isLoggedIn", 1);
    setIsLoggedIn(true);
  };

  const signOutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };
  return (
    <>
      <Header
        isLoggedIn={isLoggedIn}
        onSignIn={signInHandler}
        onSignOut={signOutHandler}
      />
      {isLoggedIn && (
        <div>
          <UserForm onAddUser={addUserHandler} />
          <UserList userData={userData} />
        </div>
      )}
    </>
  );
}

export default App;
