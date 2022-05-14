import { Fragment, useState } from "react";
import useInputField from "../Hooks/input-field";
import axios from "axios";
import Card from "../UI/Card";
import Button from "../UI/Button";

import classes from "./ChangePassword.module.css";
import Header from "../Components/Header";

const ChangePassword = () => {
  const {
    enteredValue: passwordInput,
    valueIsValid: passwordIsValid,
    hasError: passwordHasError,
    wasTouched: passwordWasTouched,
    valueChangeHandler: passwordChangeHandler,
    valueBlurHandler: passwordBlurHandler,
  } = useInputField((value) => value.trim() !== "");

  const {
    enteredValue: retypedPasswordInput,
    valueIsValid: retypedPasswordIsValid,
    hasError: retypedPasswordHasError,
    wasTouched: retypedPasswordWasTouched,
    valueChangeHandler: retypedPasswordChangeHandler,
    valueBlurHandler: retypedPasswordBlurHandler,
  } = useInputField((value) => value.trim() !== "");

  const [httpError, setHttpError] = useState();

  let passwordsMatch = false;

  if (passwordInput === retypedPasswordInput) {
    passwordsMatch = true;
  }

  let formIsValid = false;

  if (retypedPasswordIsValid && passwordIsValid && passwordsMatch) {
    formIsValid = true;
  }

  const resetPassword = async (password, id) => {
    await axios
      .patch(
        `http://localhost:5000/user/reset-password/${id}`,
        {
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": localStorage.getItem("x-auth-token"),
          },
        }
      )
      .catch((err) => {
        setHttpError(err.response.data.msg);
      });
  };

  const submissionHandler = (e) => {
    e.preventDefault();
    if (!passwordIsValid && !retypedPasswordIsValid) {
      return;
    }
    resetPassword(passwordInput, localStorage.getItem("user-id")).catch(
      (err) => {
        setHttpError(err);
      }
    );
  };

  return (
    <Fragment>
      <Header />
      <Card className={classes["change-password-card"]}>
        <h2 className={classes["change-password-header"]}>Change Password</h2>
        <div className={classes["change-password-container"]}>
          <form
            className={classes["change-password-item-form"]}
            onSubmit={submissionHandler}
          >
            <label
              className={classes["change-password-item"]}
              htmlFor="new-password"
            >
              New Password
            </label>
            <input
              className={classes["change-password-item"]}
              type="text"
              id="new-password"
              onBlur={passwordBlurHandler}
              onChange={passwordChangeHandler}
              value={passwordInput}
            />
            {passwordHasError && (
              <p className={classes.error}>Please enter a valid password</p>
            )}
            <label
              className={classes["change-password-item"]}
              htmlFor="retype-new-password"
            >
              Re-Type Password
            </label>
            <input
              className={classes["change-password-item"]}
              type="text"
              id="retype-new-password"
              onBlur={retypedPasswordBlurHandler}
              onChange={retypedPasswordChangeHandler}
              value={retypedPasswordInput}
            />
            {retypedPasswordHasError && (
              <p className={classes.error}>Please enter a valid password</p>
            )}
            {passwordWasTouched &&
              retypedPasswordWasTouched &&
              !passwordsMatch && (
                <p className={classes.error}>
                  Please make sure passwords match
                </p>
              )}
            {}
            <Button
              className={classes["change-password-button"]}
              disabled={!formIsValid}
            >
              Submit
            </Button>
            {httpError && <p className={classes.error}>Something went wrong</p>}
          </form>
        </div>
      </Card>
    </Fragment>
  );
};

export default ChangePassword;
