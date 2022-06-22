import classes from "./Forms.module.css";

const Form2 = (props) => {
  const nextLevel = (event) => {
    event.preventDefault();
    props.setLevel();
  };

  return (
    <form className={classes.formContainer} onSubmit={nextLevel}>
      <span className={classes.formHeader}>
        Let's set up a home for all your work
      </span>
      <span className={classes.formSub}>
        You can always create another workspace later.
      </span>
      <div className={classes.formControl}>
        <label htmlFor="workspacename">Workspace Name</label>
        <input type="text" id="workspacename" placeholder="Eden" required />
      </div>
      <div className={classes.formControl}>
        <label htmlFor="url">
          Workspace URL <span>(optional)</span>
        </label>
        <div className={classes.url}>
          <span>www.eden.com/</span>
          <input type="text" id="url" placeholder="Example" required />
        </div>
      </div>
      <div className={classes.formControl}>
        <button type="submit">Create Workspace</button>
      </div>
    </form>
  );
};

export default Form2;
