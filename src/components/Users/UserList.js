import Card from "../UI/Card";
import UserItem from "./UserItem";
import userListStyles from "./UserList.module.css";

const UserList = (props) => {
  return (
    <Card className={userListStyles.users}>
      <ul>
        {props.userData.map((user) => (
          <UserItem
            key={user.id}
            userName={user.userName}
            userAge={user.userAge}
          />
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
