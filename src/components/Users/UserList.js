import styles from "./UserList.module.css";
import Card from "../UI/Card";
const UserList = (props) => {
  return (
    <Card className={styles.users}>
      <ul>
        {props.users.map((item) => (
          <li key={item.id}>
            {item.name} ({item.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
