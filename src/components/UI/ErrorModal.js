import styles from "./ErrorModal.module.css";

import Card from "./Card";
import Button from "./Button";
// import Wrapper from "../Helpers/Wrapper";
import React from "react";

const ErrorModal = (props) => {
  return (
    <React.Fragment>
      <div className={styles.backdrop} onClick={props.onConfirm} />
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.desc}</p>
        </div>
        <footer className={styles.actions}>
          <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
      </Card>
    </React.Fragment>
  );
};

export default ErrorModal;
