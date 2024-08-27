import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { isAuthenticated } from "utils/index";
import { removeFromStorage } from "utils/storage/removeFromStorage";
import styles from "./header.module.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  function Logout() {
    removeFromStorage("user");
    navigate("/");
  }

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <header className={styles.header}>
      <span className={styles.logo}>Organize Your Watch List</span>
      <button className={styles.menuButton} onClick={toggleMenu}>
        &#9776;
      </button>
      <nav className={styles.navLinks}>
        <Link to="/" className={styles.button}>
          Home
        </Link>

        {isAuthenticated() && (
          <>
            <Link to="/watchList" className={styles.button}>
              WatchList
            </Link>
            <button className={styles.button} onClick={Logout}>
              Logout
            </button>
          </>
        )}
        {!isAuthenticated() && (
          <>
            <Link to="/register" className={styles.button}>
              Register
            </Link>
          </>
        )}
      </nav>
      <div className={`${styles.sideMenu} ${menuOpen ? styles.active : ""}`}>
        <button className={styles.closeButton} onClick={toggleMenu}>
          &times;
        </button>
        <Link to="/" className={styles.button}>
          Home
        </Link>

        {isAuthenticated() && (
          <>
            <Link to="/watchList" className={styles.button}>
              WatchList
            </Link>
            <button
              className={styles.button}
              onClick={() => {
                Logout();
                toggleMenu();
              }}
            >
              Logout
            </button>
          </>
        )}
        {!isAuthenticated() && (
          <>
            <Link to="/register" className={styles.button}>
              Register
            </Link>
          </>
        )}
      </div>
    </header>
  );
}
