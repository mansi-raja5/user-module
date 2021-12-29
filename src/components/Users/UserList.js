import Card from "../UI/Card";
import UserItem from "./UserItem";

const UserList = (props) => {
  return (
    <div>
      <Card>
        {props.userData.map((user) => (
          <UserItem
            key={user.id}
            userName={user.userName}
            userAge={user.userAge}
          />
        ))}
      </Card>
    </div>
  );
};

export default UserList;
