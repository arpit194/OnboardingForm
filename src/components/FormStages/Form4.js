import classes from "./Forms.module.css";

const Form2 = (props) => {
  const nextLevel = (event) => {
    event.preventDefault();
    props.setLevel();
  };

  return (
    <form className={classes.formContainer} onSubmit={nextLevel}>
      <div className={classes.check}>✓</div>
      <span className={classes.formHeader}>Congratulations, {props.name}!</span>
      <span className={classes.formSub}>
        You have completed onboarding, you can start using the Eden!
      </span>
      <div className={classes.formControl}>
        <button type="submit">Launch Eden</button>
      </div>
    </form>
  );
};

export default Form2;
