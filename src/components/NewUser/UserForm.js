import { useState } from "react";

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
    <div>
      {!isValidate && error && (
        <Modal
          msg={error.msg}
          title={error.title}
          onOkayClick={onOkayClickHandler}
        />
      )}
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
          <Button onClick={onCancelClickHandler}>Cancel</Button>
        </form>
      </Card>
    </div>
  );
};
export default UserForm;
