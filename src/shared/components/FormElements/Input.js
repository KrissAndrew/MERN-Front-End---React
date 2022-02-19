import { useReducer } from "react";
import "./Input.css";

// use a reducer as we have multiple related states
const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.val,
        isValid: true,
      };
    default:
      return state;
  }
};

const Input = (props) => {
  // reducer takes reducer function and optional initial state
  // returns 2 elements, current state and a dispatch function
  // dispatch function called, updates the state - rerenders the component
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: "",
    isValid: false,
  });

  // dispatch called on change for input item, leading to change of state dicated by our predefined switch case
  const changeHandler = (event) => {
    dispatch({ type: "CHANGE", val: event.target.value });
  };

  // increase component flexibility with element option - will always be input unless 'textarea' is specified
  const element =
    props.element === "textarea" ? (
      <textarea
        id={props.id}
        rows={props.rows || 3}
        cols={props.cols || 3}
        onChange={changeHandler}
        value={inputState.value}
      />
    ) : (
      <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        onChange={changeHandler}
        value={inputState.value}
      ></input>
    );

  return (
    <div
      className={`form-control ${
        !inputState.isValid && "form-control--invalid"
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      {element}
      {!inputState.isValid && <p>{props.errorText}</p>}
    </div>
  );
};

export default Input;
