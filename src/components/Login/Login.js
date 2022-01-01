import { useState, useEffect } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./Login.module.css";

let counter = 0;
const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  useEffect(() => {
    console.log("I'll run on every state change!");

    return () => {
      console.log(
        "Effect Cleanup! I'll trigger on every state change, before useEffect runs but not for the first time!"
      );
    };
  });

  useEffect(() => {
    console.log("I'll run only once!");

    return () => {
      console.log(
        "Effect Cleanup! I'll trigger when the component is removed from the DOM!"
      );
    };
  }, []);

  useEffect(() => {
    console.log(
      "I'll run only when enteredEmail variable changes its state and component re-evaluates!"
    );
    return () => {
      console.log(
        "Effect Cleanup! I'll trigger when enteredEmail variable changes its state, before useEffects but not for the first time!"
      );
    };
  }, [enteredEmail]);

  useEffect(() => {
    console.log("inside effect ");
    const identifier = setTimeout(() => {
      console.log("checking form valifity!");
      console.log(counter++);
      setFormIsValid(
        enteredEmail.includes("@") && enteredPassword.trim().length > 6
      );
    }, 5000);

    return () => {
      console.log(
        "clean up! This will be executed once effect is executed previously! so this will start from second useeffect execution!"
      );
      clearTimeout(identifier);
    };
  }, [enteredEmail, enteredPassword]);

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);

    setFormIsValid(
      event.target.value.trim().length > 6 && enteredEmail.includes("@")
    );
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes("@"));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onSignIn(enteredEmail, enteredPassword);
  };
  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailIsValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordIsValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button
            buttonType="submit"
            className={classes.btn}
            disabled={!formIsValid}
          >
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
