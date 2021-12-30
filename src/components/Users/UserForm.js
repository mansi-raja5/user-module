import React, { useState } from "react";

import Button from "../UI/Button";
import Card from "../UI/Card";
import Modal from "../UI/Modal";

import userFormStyles from "./UserForm.module.css";

const UserForm = (props) => {
  const [userName, setUserName] = useState("mansi");
  const [userAge, setUserAge] = useState(15);
  const [isValidate, setIsValidate] = useState();
  const [error, setError] = useState();

  const onOkayClickHandler = () => {
    setIsValidate(true);
    setError(null);
  };

  const onCancelClickHandler = () => {
    setUserName("");
    setUserAge("");
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    if (userName.trim().length === 0 && userAge.length === 0) {
      setIsValidate(false);
      setError({
        title: "Invalid Inputs!",
        msg: "Please Enter Valid Name and age of the user!",
      });
      return;
    } else if (userName.trim().length === 0) {
      setIsValidate(false);
      setError({
        title: "Invalid Username!",
        msg: "Please Enter Valid Name of the user!",
      });
      return;
    } else if (userAge.length === 0) {
      setIsValidate(false);
      setError({
        title: "Invalid Age!",
        msg: "Please Enter Valid Age of the user!",
      });
      return;
    }
    if (+userAge < 1) {
      setIsValidate(false);
      setError({
        title: "Invalid Age",
        msg: "Please enter a valid age (> 0).",
      });
      return;
    }
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
    <React.Fragment>
      {!isValidate && error && (
        <Modal
          msg={error.msg}
          title={error.title}
          onOkayClick={onOkayClickHandler}
        />
      )}
      <Card className={userFormStyles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={userName}
            onChange={userNameHandler}
          />
          <label htmlFor="userage">Age (years)</label>
          <input
            id="userage"
            type="number"
            value={userAge}
            onChange={userAgeHandler}
          />
          <Button buttonType="submit">Submit</Button>
          <Button onClick={onCancelClickHandler}>Cancel</Button>
        </form>
      </Card>
    </React.Fragment>
  );
};
export default UserForm;
