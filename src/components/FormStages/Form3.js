import classes from "./Forms.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faUsers } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";

const Form3 = (props) => {
  const [type, setType] = useState();

  const planType = (type) => {
    setType(type);
  };

  const nextLevel = (event) => {
    event.preventDefault();
    props.setLevel();
  };

  return (
    <form className={classes.formContainer} onSubmit={nextLevel}>
      <span className={classes.formHeader}>
        How are you planning to use Eden?
      </span>
      <span className={classes.formSub}>
        We'll streamline your setup experience accordingly.
      </span>
      <div className={classes.plans}>
        <div
          className={`${classes.plan} ${
            type === "user" && classes.planSelected
          }`}
          onClick={() => {
            planType("user");
          }}
        >
          <FontAwesomeIcon icon={faUser} size="2x" color="#222" />
          <div className={classes.planHeader}>For Myself</div>
          <div className={classes.planSub}>
            Write better. Think more clearly. Stay Organised.
          </div>
        </div>
        <div
          className={`${classes.plan} ${
            type === "team" && classes.planSelected
          }`}
          onClick={() => {
            planType("team");
          }}
        >
          <FontAwesomeIcon icon={faUsers} size="2x" color="#222" />
          <div className={classes.planHeader}>With my Team</div>
          <div className={classes.planSub}>
            Wikis, docs, tasks & projects, all in one place.
          </div>
        </div>
      </div>
      <div className={classes.formControl}>
        <button type="submit">Create Workspace</button>
      </div>
    </form>
  );
};

export default Form3;
