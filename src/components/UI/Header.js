import Button from "./Button";
import Card from "./Card";

import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Card className={classes.header}>
      {props.isLoggedIn ? (
        <Button onClick={props.onSignOut}>SIGN OUT</Button>
      ) : (
        <Button onClick={props.onSignIn}>SIGN IN</Button>
      )}
    </Card>
  );
};

export default Header;
