import userItemStyles from "./UserItem.module.css";

const UserItem = (props) => {
  return (
    <li className={userItemStyles.user}>
      {props.userName} is {props.userAge} years old!
    </li>
  );
};

export default UserItem;
