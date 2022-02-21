import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";

import { useForm } from "../../shared/hooks/form-hook";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
} from "../../shared/util/validators";

import classes from "./AuthForm.module.css";

const Auth = () => {
  const [formState, inputHandler] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const submitHandler = (event) => {
    event.preventDefault();
    // here we will add backend server logic
    console.log("Logging in");
  };

  return (
    <form className={classes.authForm} onSubmit={submitHandler}>
      <Input
        id="email"
        label="Email"
        validators={[VALIDATOR_EMAIL()]}
        errorText="Please enter a valid title"
        onInput={inputHandler}
      />
      <Input
        id="password"
        label="Password"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Password must be a minimum of 5 characters long"
        onInput={inputHandler}
      />
      <Button type="submit" disabled={!formState.isValid}>
        Login
      </Button>
    </form>
  );
};

export default Auth;
