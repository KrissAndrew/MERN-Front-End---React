import { NavLink } from "react-router-dom";

import classes from "./NavLinks.module.css";

const NavLinks = (props) => {
  return (
    <ul className={classes.navLinks}>
      <li>
        <NavLink to="/">All Users</NavLink>
      </li>
      <li>
        <NavLink to="/u1/places">My Places</NavLink>
      </li>
      <li>
        <NavLink to="/places/new">Add Place</NavLink>
      </li>
      <li>
        <NavLink to="/auth">Authenticate</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
