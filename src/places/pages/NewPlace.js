import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";

import { useForm } from "../../shared/hooks/form-hook";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/util/validators";

import classes from "./PlaceForm.module.css";

const NewPlace = () => {
  const [formState, inputHandler] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
      address: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const submitHandler = (event) => {
    event.preventDefault();
    // here we will add backend server logic
    console.log(formState.inputs);
  };

  return (
    <form className={classes.placeForm} onSubmit={submitHandler}>
      <Input
        id="title"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title"
        onInput={inputHandler}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(15)]}
        errorText="Descriptions must be a minimum of 15 characters long"
        onInput={inputHandler}
      />
      <Input
        id="address"
        label="Address"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid address"
        onInput={inputHandler}
      />
      <Button type="submit" disabled={!formState.isValid}>
        Add Place
      </Button>
    </form>
  );
};

export default NewPlace;
