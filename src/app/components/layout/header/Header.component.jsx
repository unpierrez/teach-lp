"use client";

import { useHeader } from "./Header.hook";
import styles from "./Header.module.css";

export default function Header() {
  const { menuOpen, toggleMenu, navItems } = useHeader();

  return (
    <header className={styles.header}>
      <div className={styles.menuWrapper}>
        <img src="/assets/logo.svg" alt="Logo" className={styles.logo} />

        <nav>
          <ul className={`${styles.navList} ${menuOpen ? styles.open : ""}`}>
            {navItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}

            {menuOpen && (
              <div className={styles.mobileButtons}>
                <button className={styles.logInButton}>Log In</button>
                <button className={styles.signUpButton}>Sign Up Now</button>
              </div>
            )}
          </ul>
        </nav>
      </div>

      <div className={styles.buttonsWrapper}>
        <button className={styles.logInButton}>Log In</button>
        <button className={styles.signUpButton}>Sign Up Now</button>
      </div>

      <button
        className={styles.burgerButton}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <img src="/assets/menuHamb.svg" alt="Menu" />
      </button>
    </header>
  );
}
