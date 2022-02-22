import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";

import { useForm } from "../../shared/hooks/form-hook";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MATCH,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/util/validators";

// There is an issue with the confirm password & password input fields at the moment
// the input fields are only responsible for their own validity, so if one is changed to not match it will become invalid yet the other will remain valid
// then if you change the other the match the now invalid, the one you change will validate itself when it matches however the other invalid one will remain invalid until it is changed
// to match the now valid one.
// there needs to be some form of two way binding, however its so fucking convuluted at this point with the custom component, the detached validation and the hook that the solution
// seems impossible to reach.
// if the form is filled in correctly in a linear fashion this is not a problem.
const SignUpForm = (props) => {
  const [formState, inputHandler] = useForm(
    {
      name: {
        value: "",
        isValid: false,
      },
      surname: {
        value: "",
        isValid: false,
      },
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
      confirmPassword: {
        value: "",
        isValid: false,
      },
    },
    false
  );
  const { password, confirmPassword } = formState.inputs;

  console.log(formState, inputHandler);

  console.log(password, confirmPassword);
  const signUpSubmitHandler = (event) => {
    event.preventDefault();
    // here we will add backend server logic
    console.log(formState.inputs);
  };
  return (
    <>
      <h2>Sign Up</h2>
      <form onSubmit={signUpSubmitHandler}>
        <Input
          id="name"
          label="First Name"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Field Required"
          onInput={inputHandler}
        />
        <Input
          id="surname"
          label="Last Name"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Field Required"
          onInput={inputHandler}
        />
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
          type="password"
          validators={[
            formState.inputs.confirmPassword.value !== ""
              ? (VALIDATOR_MINLENGTH(5),
                VALIDATOR_MATCH(formState.inputs.confirmPassword.value))
              : VALIDATOR_MINLENGTH(5),
          ]}
          errorText="Password must be a minimum of 5 characters long"
          onInput={inputHandler}
        />
        <Input
          id="confirmPassword"
          label="Confirm Password"
          type="password"
          validators={[VALIDATOR_MATCH(formState.inputs.password.value)]}
          errorText="Password must match"
          onInput={inputHandler}
        />
        <Button type="submit" disabled={!formState.isValid}>
          Sign Up
        </Button>
        <Button type="submit" onClick={props.onSignIn}>
          Login
        </Button>
      </form>
    </>
  );
};

export default SignUpForm;
