import { useState } from "react";

import SignInForm from "../components/SignInForm";
import classes from "./AuthForm.module.css";
import Card from "../../shared/components/UIElements/Card";
import SignUpForm from "../components/SignUpForm";

const Auth = () => {
  // state to swap from signin to sign up form
  const [showSignup, setShowSignup] = useState(false);

  const showSignupHandler = () => {
    setShowSignup(!showSignup);
  };

  let content = <SignInForm onSignUp={showSignupHandler} />;

  if (showSignup) content = <SignUpForm onSignIn={showSignupHandler} />;

  return <Card className={classes.auth}>{content}</Card>;
};

export default Auth;
