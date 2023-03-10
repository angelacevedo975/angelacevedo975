import React from "react";
import useStyles from "./Styles";

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <p className={classes.text}>© 2021 Angel Acevedo</p>
      </div>
    </footer>
  );
}
