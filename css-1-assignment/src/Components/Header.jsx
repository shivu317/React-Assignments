import React, { useState } from "react";
import styles from "./header.module.css";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>Your Logo</div>
        <div className={styles.menu}>
          <button className={styles.menuButton} onClick={toggleMenu}>
            <span className={styles.menuIcon}></span>
          </button>
        </div>
        <ul
          className={`${styles.menuList} ${
            showMenu ? styles.showMenu : styles.hideMenu
          }`}
        >
          <li className={styles.menuItem}>
            <a href="#">Home</a>
          </li>
          <li className={styles.menuItem}>
            <a href="#">About</a>
          </li>
          <li className={styles.menuItem}>
            <a href="#">Projects</a>
          </li>
          <li className={styles.menuItem}>
            <a href="#">Contact</a>
          </li>
          <li className={styles.menuItem}>
            <button className={styles.loginButton}>Login</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
