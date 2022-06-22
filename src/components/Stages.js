import classes from "./Stages.module.css";

const Stages = (props) => {
  console.log((100 / 3) * (props.level - 1));
  return (
    <div className={classes.container}>
      <div className={classes.fillContainer}>
        <div
          className={classes.fill}
          style={{ width: (100 / 3) * (props.level - 1) + "%" }}
        ></div>
      </div>
      <div className={classes.stages}>
        <div
          className={`${classes.stage} ${
            props.level >= 1 && classes.activeStage
          }`}
        >
          <span className={classes.level}>1</span>
        </div>
        <div
          className={`${classes.stage} ${
            props.level >= 2 && classes.activeStage
          }`}
        >
          <span className={classes.level}>2</span>
        </div>
        <div
          className={`${classes.stage} ${
            props.level >= 3 && classes.activeStage
          }`}
        >
          <span className={classes.level}>3</span>
        </div>
        <div
          className={`${classes.stage} ${
            props.level >= 4 && classes.activeStage
          }`}
        >
          <span className={classes.level}>4</span>
        </div>
      </div>
    </div>
  );
};

export default Stages;
