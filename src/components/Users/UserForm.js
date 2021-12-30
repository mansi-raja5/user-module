import React, { useState, Fragment, useRef } from "react";

import Button from "../UI/Button";
import Card from "../UI/Card";
import Modal from "../UI/Modal";

import userFormStyles from "./UserForm.module.css";

const UserForm = (props) => {
  const inputNameRef = useRef();
  const inputAgeRef = useRef();

  const [isValidate, setIsValidate] = useState();
  const [error, setError] = useState();

  const onOkayClickHandler = () => {
    setIsValidate(true);
    setError(null);
  };

  const onCancelClickHandler = () => {
    inputNameRef.current.value = "";
    inputAgeRef.current.value = "";
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    const userName = inputNameRef.current.value;
    const userAge = inputAgeRef.current.value;
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
    onCancelClickHandler();
  };

  return (
    <Fragment>
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
          <input id="username" type="text" ref={inputNameRef} />
          <label htmlFor="userage">Age (years)</label>
          <input id="userage" type="number" ref={inputAgeRef} />
          <Button buttonType="submit">Submit</Button>
          <Button onClick={onCancelClickHandler}>Cancel</Button>
        </form>
      </Card>
    </Fragment>
  );
};
export default UserForm;
