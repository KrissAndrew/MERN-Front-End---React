import Input from "../../shared/components/FormElements/Input";
import classes from "./NewPlace.module.css";

const NewPlace = () => {
  return (
    <form className={classes.placeForm}>
      <Input
        type="text"
        label="Title"
        validators={[]}
        errorText="Please enter a valid title"
      />
    </form>
  );
};

export default NewPlace;
