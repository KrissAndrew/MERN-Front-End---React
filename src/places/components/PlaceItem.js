import classes from "./PlaceItem.module.css";
import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/FormElements/Button";

const PlaceItem = (props) => {
  return (
    <li className={classes.placeItem}>
      <Card className={classes.placeItemContent}>
        <div className={classes.placeItemImage}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.placeItemInfo}>
          <h2>{props.title}</h2>
          <h3>{props.address}</h3>
          <p>{props.description}</p>
        </div>
        <div className={classes.placeItemActions}>
          <Button inverse>View on Map</Button>
          <Button to={`/places/${props.id}`}>Edit</Button>
          <Button danger>Delete</Button>
        </div>
      </Card>
    </li>
  );
};

export default PlaceItem;
