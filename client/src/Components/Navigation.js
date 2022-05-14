import React from "react";
import { Link } from "react-router-dom";
import Button from "../UI/Button";

import classes from "./Navigation.module.css";

const Navigation = (props) => {
  const buttonClass = `${classes["logout-button"]} ${classes["nav-item"]}`

  return (
    <nav>
      <ul className={classes["nav-list"]}>
        <li className={classes["nav-item"]}>
          <Link className={classes.link} to="/video-list">
            Video List
          </Link>
        </li>
        <li className={classes["nav-item"]}>
          <Link className={classes.link} to="/change-password">
            Change Password
          </Link>
        </li>
        {/* {props.authorized && (
        <li className={classes["nav-item"]}>
          <Link className={classes.link} to="/new-profile">
            Create New Profile
          </Link>
        </li>
      )} */}
        <li>
          <Button
            className={buttonClass}
            onClick={props.logOut}
          >
            Log Out
          </Button>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
