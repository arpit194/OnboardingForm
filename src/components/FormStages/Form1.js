import classes from "./Forms.module.css";
import { useRef } from "react";

const Form1 = (props) => {
  const nameRef = useRef();

  const nextLevel = (event) => {
    event.preventDefault();
    props.setLevel();
    props.setName(nameRef.current.value);
  };

  return (
    <form className={classes.formContainer} onSubmit={nextLevel}>
      <span className={classes.formHeader}>Welcome! First things first...</span>
      <span className={classes.formSub}>You can always change them later.</span>
      <div className={classes.formControl}>
        <label htmlFor="fullname">Full Name</label>
        <input type="text" id="fullname" placeholder="Steve Jobs" required />
      </div>
      <div className={classes.formControl}>
        <label htmlFor="displayname">Display Name</label>
        <input
          type="text"
          id="displayname"
          ref={nameRef}
          placeholder="Steve"
          required
        />
      </div>
      <div className={classes.formControl}>
        <button type="submit">Create Workspace</button>
      </div>
    </form>
  );
};

export default Form1;
