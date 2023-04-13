import { useState } from "react";
import styles from "@/styles/Navbar.module.css";
import Image from "next/image";

export default function NavBar() {
  const [toggle, setToggle] = useState(false);

  function toggleHamburgerMenu() {
    setToggle((prevToggle) => !prevToggle);
  }

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <a onClick={() => setToggle(false)} to="/">
          <Image className={styles.logo} alt="personal logo" />
        </a>
        <h4>Kevin Tanzyl</h4>
        <ul className={styles.links}>
          <li>
            <a
              onClick={() => setToggle(false)}
              href="#"
              className={styles.link}
            >
              Home
            </a>
          </li>
          <li>
            <a
              onClick={() => setToggle(false)}
              href="#"
              className={styles.link}
            >
              About
            </a>
          </li>
          <li>
            <a
              onClick={() => setToggle(false)}
              href="#"
              className={styles.link}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              onClick={() => setToggle(false)}
              href="#"
              className={styles.link}
            >
              Contact
            </a>
          </li>
        </ul>

        <button onClick={toggleHamburgerMenu} className={styles.hamburger}>
          <span
            className={`${styles.hamburgerTop} ${toggle && styles.open} ${
              toggle && styles.openHamburgerTop
            }`}
          ></span>
          <span
            className={`${styles.hamburgerMiddle} ${toggle && styles.open} ${
              toggle && styles.openHamburgerMiddle
            }`}
          ></span>
          <span
            className={`${styles.hamburgerBottom} ${toggle && styles.open} ${
              toggle && styles.openHamburgerBottom
            }`}
          ></span>
        </button>
      </nav>

      {toggle && (
        <ul className={styles.mobileLinks}>
          <li>
            <a
              onClick={() => setToggle(false)}
              href="#"
              className={styles.mobileLink}
            >
              Home
            </a>
          </li>
          <li>
            <a
              onClick={() => setToggle(false)}
              href="#"
              className={styles.mobileLink}
            >
              About
            </a>
          </li>
          <li>
            <a
              onClick={() => setToggle(false)}
              href="#"
              className={styles.mobileLink}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              onClick={() => setToggle(false)}
              href="#"
              className={styles.mobileLink}
            >
              Contact
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}
