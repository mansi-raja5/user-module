import Login from "../Login/Login";
import Button from "./Button";
import Card from "./Card";

import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <>
      {props.isLoggedIn ? (
        <Card className={classes.header}>
          <Button onClick={props.onSignOut}>SIGN OUT</Button>
        </Card>
      ) : (
        <Login onSignIn={props.onSignIn} />
      )}
    </>
  );
};

export default Header;
