import React, { Fragment } from "react";
import MealImg from "./meals.jpg";
import classes from "./header.module.css";
import HeaderCartButton from "./headerCartButton";

export default function Header() {
  return (
    <Fragment>
      <header className={classes.header}>
        <div className={classes.logo}>ReactFoods</div>
        <div>
          <HeaderCartButton />
        </div>
      </header>
      <div className={classes["main-image"]}>
        <img src={MealImg} alt="A Table full of looking Food" />
      </div>
    </Fragment>
  );
}
