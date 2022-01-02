import { useState, useEffect, useReducer } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./Login.module.css";

const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return {
      value: action.val,
      isValid: action.val.includes("@"),
    };
  } else if (action.type === "INPUT_BLUR") {
    return {
      value: state.value,
      isValid: state.value.includes("@"),
    };
  }
  return {
    value: "",
    isValid: false,
  };
};

const passwordReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return {
      value: action.val,
      isValid: action.val.trim().length > 6,
    };
  } else if (action.type === "INPUT_BLUR") {
    return {
      value: state.value,
      isValid: state.value.trim().length > 6,
    };
  }
  return {
    value: "",
    isValid: false,
  };
};

const Login = (props) => {
  const [formIsValid, setFormIsValid] = useState(false);

  //Email reducer
  const [email, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });

  //Password reducer
  const [password, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });

  useEffect(() => {
    console.log("Checking Form validity!");
    const identifier = setTimeout(() => {
      setFormIsValid(email.isValid && password.isValid);
    }, 500);

    return () => {
      clearTimeout(identifier);
    };
  }, [email.isValid, password.isValid]);

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "USER_INPUT", val: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: "USER_INPUT", val: event.target.value });
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: "INPUT_BLUR" });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: "INPUT_BLUR" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onSignIn(email.value, password.value);
  };
  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            email.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={email.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            password.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password.value}
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
