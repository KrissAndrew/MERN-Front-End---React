import classes from "./UserItem.module.css";

import Avatar from "../../shared/components/UIElements/Avatar";
import Card from "../../shared/components/UIElements/Card";
import { Link } from "react-router-dom";
const UserItem = (props) => {
  return (
    <li className={classes.userItem}>
      <Card className={classes.userContent}>
        <Link to={`/${props.id}/places`}>
          <div className={classes.userImage}>
            <Avatar image={props.image} alt={props.name} />
          </div>
          <div className={classes.userInfo}>
            <h2>{props.name}</h2>
            <h3>
              {props.placeCount} {props.placeCount === 1 ? "Place" : "Places"}
            </h3>
          </div>
        </Link>
      </Card>
    </li>
  );
};
export default UserItem;
