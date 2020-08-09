import { withStyles } from "@material-ui/styles";
import classNames from "classnames";
import React, { Component } from "react";
import styles from "../styles/FooterStyles.js";

class Footer extends Component {
  render() {
    const { classes } = this.props;
    return (
      <footer className={classes.footer}>
        <a
          href="https://github.com/Rajan-Savaliya/covid-19-india"
          target="_blank"
          rel="noopener noreferrer"
          className={classNames(classes.btn, classes.github)}
        >
          Contribute on Github
        </a>
        <a
          href="https://github.com/Rajan-Savaliya"
          target="_blank"
          rel="noopener noreferrer"
          className={classNames(classes.btn)}
        >
          Create By Rajan Savaliya , copyright &copy; 2020 Rajan savaliya
        </a>
        <a
          href="https://github.com/Rajan-Savaliya"
          target="_blank"
          rel="noopener noreferrer"
          className={classNames(classes.btn, classes.issue)}
        >
          see the code an github
        </a>
      </footer>
    );
  }
}
export default withStyles(styles)(Footer);
