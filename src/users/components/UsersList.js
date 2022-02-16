import Card from "../../shared/components/UIElements/Card";
import UserItem from "./UserItem";
import classes from "./UsersList.module.css";

const UsersList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <Card>
          <h2>No Users Found</h2>
        </Card>
      </div>
    );
  }

  return (
    <ul className={classes.usersList}>
      {props.items.map((user) => (
        <UserItem
          key={user.id}
          id={user.id}
          image={user.image}
          name={user.name}
          placeCount={user.places}
        />
      ))}
    </ul>
  );
};
export default UsersList;
