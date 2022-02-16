import classes from "./SideDrawer.module.css";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";

// side drawer menu for mobile navigation
// portal used to render this at a higher level in the DOM
// transition classes found in index.css
// mount and unmount add/removes from dom respectively
const SideDrawer = (props) => {
  const content = (
    <CSSTransition
      in={props.show}
      timeout={200}
      classNames="slide-in-left"
      mountOnEnter
      unmountOnExit
    >
      <aside onClick={props.onClick} className={classes.sideDrawer}>
        {props.children}
      </aside>
    </CSSTransition>
  );
  return ReactDOM.createPortal(content, document.getElementById("drawer-hook"));
};

export default SideDrawer;
