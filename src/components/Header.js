import classes from "./Header.module.css";

const Header = () => {
  return (
    <nav className={classes.nav}>
      <img src="./images/Eden_Logo.png" alt="Eden Logo" />
      <span>Eden</span>
    </nav>
  );
};

export default Header;
