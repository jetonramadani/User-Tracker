import styles from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import {useState, useRef} from "react";
import ErrorModal from "../UI/ErrorModal";
import React from "react";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enterdUserAge = ageInputRef.current.value;
    if (enteredName.trim().length === 0 || enterdUserAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        desc: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+enterdUserAge < 1) {
      setError({
        title: "Invalid age",
        desc: "Please enter a valid age (> 0).",
      });
      return;
    }
    const user = {
      name: enteredName,
      age: enterdUserAge,
    };
    props.onAddUser(user);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <React.Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          desc={error.desc}
          onConfirm={errorHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" ref={nameInputRef} />
          <label htmlFor="age">Age (Years)</label>
          <input type="number" id="age" ref={ageInputRef} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default AddUser;
