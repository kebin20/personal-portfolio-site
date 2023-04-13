import { useState } from "react";
// import Image from "next/image";

export default function NavBar() {
  const [toggle, setToggle] = useState(false);

  function toggleHamburgerMenu() {
    setToggle((prevToggle) => !prevToggle);
  }

  return (
    <header className="header">
      <nav className="nav">
        <a onClick={() => setToggle(false)} to="/">
          {/* <Image className="logo" alt="personal logo" src={} /> */}
        </a>
        <h4>Kevin Tanzyl</h4>
        <ul className="links">
          <li>
            <a onClick={() => setToggle(false)} href="#" className="link">
              Home
            </a>
          </li>
          <li>
            <a onClick={() => setToggle(false)} href="#" className="link">
              About
            </a>
          </li>
          <li>
            <a onClick={() => setToggle(false)} href="#" className="link">
              Projects
            </a>
          </li>
          <li>
            <a onClick={() => setToggle(false)} href="#" className="link">
              Contact
            </a>
          </li>
        </ul>

        <button onClick={toggleHamburgerMenu} className="hamburger-menu">
          <span className={`hamburger-top ${toggle ? "open" : ""}`}></span>
          <span className={`hamburger-middle ${toggle ? "open" : ""}`}></span>
          <span className={`hamburger-bottom ${toggle ? "open" : ""}`}></span>
        </button>
      </nav>

      {toggle && (
        <ul className="mobile-links">
          <li>
            <a onClick={() => setToggle(false)} href="#" className="link">
              Home
            </a>
          </li>
          <li>
            <a onClick={() => setToggle(false)} href="#" className="link">
              About
            </a>
          </li>
          <li>
            <a onClick={() => setToggle(false)} href="#" className="link">
              Projects
            </a>
          </li>
          <li>
            <a onClick={() => setToggle(false)} href="#" className="link">
              Contact
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}
