import React, { Fragment } from "react";
import classes from "./headerCart.module.css";
import CartIcon from "./cartIcon";
export default function HeaderCartButton() {
  return (
    <button className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span> Your Cart </span>
      <span className={classes.badge}>3</span>
    </button>
  );
}
