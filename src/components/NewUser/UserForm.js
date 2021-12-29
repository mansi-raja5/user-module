import { useState } from "react";

import Button from "../UI/Button";
import Card from "../UI/Card";

import userFormStyles from "./UserForm.module.css";

const UserForm = (props) => {
  const [userName, setUserName] = useState("mansi");
  const [userAge, setUserAge] = useState(15);

  const addUserHandler = (event) => {
    event.preventDefault();
    const userData = {
      id: Math.random().toString(),
      userName: userName,
      userAge: userAge,
    };
    props.onAddUser(userData);
    setUserName("");
    setUserAge("");
  };

  const userNameHandler = (event) => {
    setUserName(event.target.value);
  };

  const userAgeHandler = (event) => {
    setUserAge(event.target.value);
  };
  return (
    <Card>
      <form className={userFormStyles.input} onSubmit={addUserHandler}>
        <div>
          <label>Username</label>
          <input value={userName} onChange={userNameHandler} />
        </div>
        <div>
          <label>Age (years)</label>
          <input value={userAge} onChange={userAgeHandler} />
        </div>
        <Button buttonType="submit">Submit</Button>
      </form>
    </Card>
  );
};
export default UserForm;
