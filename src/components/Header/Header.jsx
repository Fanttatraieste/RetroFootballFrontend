import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo3.png";
import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.circle}></div>
      <Link to="/">
        <img src={logo} alt="Logo" className={styles.logo} />
      </Link>
      <ul className={styles.navigation}>
        <li className={styles.navItem}>
          <NavLink to="/about" className={styles.navLink}>
            About
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink to="/teams" className={styles.navLink}>
            teams
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink to="/icons" className={styles.navLink}>
            icons
          </NavLink>
        </li>
      </ul>

      <input className={styles.navInput} placeholder="search player" />
      <button className={styles.navButton}>search</button>
    </div>
  );
}

export default Header;
