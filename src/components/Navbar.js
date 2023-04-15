import { useState } from "react";
import Image from "next/image";
import logo from "../assets/kevin-avatar-light.svg";

export default function NavBar() {
  const [toggle, setToggle] = useState(false);

  function toggleHamburgerMenu() {
    setToggle((prevToggle) => !prevToggle);
  }

  return (
    <header className="header">
      <nav className="nav">
        <Image className="logo" alt="personal logo" src={logo} />
        <h4 className="logo-title">Kevin Tanzyl</h4>
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
          <span className={`${toggle && "open"} hamburger-top`}></span>
          <span className={`${toggle && "open"} hamburger-middle`}></span>
          <span className={`${toggle && "open"} hamburger-bottom`}></span>
        </button>
      </nav>

      {toggle && (
        <ul className="mobile-links">
          <li>
            <a
              onClick={() => setToggle(false)}
              href="#"
              className="mobile-link"
            >
              Home
            </a>
          </li>
          <li>
            <a
              onClick={() => setToggle(false)}
              href="#"
              className="mobile-link"
            >
              About
            </a>
          </li>
          <li>
            <a
              onClick={() => setToggle(false)}
              href="#"
              className="mobile-link"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              onClick={() => setToggle(false)}
              href="#"
              className="mobile-link"
            >
              Contact
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}
