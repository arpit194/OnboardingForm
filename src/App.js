import { useState } from "react";

import classes from "./App.module.css";

import Header from "./components/Header";
import Stages from "./components/Stages";
import Form1 from "./components/FormStages/Form1";
import Form2 from "./components/FormStages/Form2";
import Form3 from "./components/FormStages/Form3";
import Form4 from "./components/FormStages/Form4";

function App() {
  const [level, setLevel] = useState(1);
  const [name, setName] = useState("User");

  const nextLevel = () => {
    if (level < 4) setLevel(level + 1);
    else setLevel(1);
  };

  const userName = (name) => {
    setName(name);
  };

  const forms = [
    <Form1 setLevel={nextLevel} setName={userName} />,
    <Form2 setLevel={nextLevel} />,
    <Form3 setLevel={nextLevel} />,
    <Form4 setLevel={nextLevel} name={name} />,
  ];

  return (
    <div className={classes.container}>
      <Header />
      <Stages level={level} />
      <div classes={classes.forms}>
        {forms.filter((form, index) => {
          return index === level - 1;
        })}
      </div>
    </div>
  );
}

export default App;
