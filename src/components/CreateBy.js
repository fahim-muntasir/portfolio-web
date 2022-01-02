import React from "react";
import classes from "../styles/SinglePortfolio.module.css";

export default function CreateBy({ icon, tech }) {
  return (
    <div className={classes.singleUseLanguage}>
      <div className={icon}></div>
      <span>{tech}</span>
    </div>
  );
}
