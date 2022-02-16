import { useState } from "react";
import { Link } from "react-router-dom";

import MainHeader from "./MainHeader";
import classes from "./MainNavigation.module.css";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import Backdrop from "../UIElements/Backdrop";

// spans form hamburger button for smaller screens
const MainNavigation = (props) => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawerHandler = () => {
    setDrawerIsOpen(true);
  };

  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  };

  return (
    <>
      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
      <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
        <nav className={classes.mainNavDrawerNav}>
          <NavLinks />
        </nav>
      </SideDrawer>
      <MainHeader>
        <button onClick={openDrawerHandler} className={classes.mainNavButton}>
          <span />
          <span />
          <span />
        </button>

        <h1 className={classes.mainNavTitle}>
          <Link to="/">AppName</Link>
        </h1>
        <nav className={classes.mainNavNav}>
          <NavLinks />
        </nav>
      </MainHeader>
    </>
  );
};

export default MainNavigation;
