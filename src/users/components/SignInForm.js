import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";

import { useForm } from "../../shared/hooks/form-hook";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
} from "../../shared/util/validators";

const SignInForm = (props) => {
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

  const signInSubmitHandler = (event) => {
    event.preventDefault();
    // here we will add backend server logic
    console.log("Logging in");
  };

  return (
    <>
      <h2>Login Required</h2>
      <form onSubmit={signInSubmitHandler}>
        <Input
          id="email"
          label="Email"
          validators={[VALIDATOR_EMAIL()]}
          errorText="Please enter a valid email address"
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
        <Button onClick={props.onSignUp}>Sign Up</Button>
      </form>
    </>
  );
};

export default SignInForm;
