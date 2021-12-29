import userItemStyles from './UserItem.module.css'

const UserItem = (props) => {
  return (
    <div className={userItemStyles.user}>
      {props.userName}({props.userAge})
    </div>
  );
};

export default UserItem;
