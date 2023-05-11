import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../../assets/kevin-avatar-light.svg";

import Hamburger from "./Hamburger";
import NavItem from "./NavItem";

export default function NavBar() {
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = ["home", "about", "projects", "contact"];

  function toggleHamburgerMenu() {
    setToggle((prevToggle) => !prevToggle);
  }

  function handleScroll() {
    const offset = window.scrollY;
    if (offset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <nav className="nav">
        <Image className="logo" alt="personal logo" src={logo} />
        <h4 className="logo-title">Kevin Tanzyl</h4>
        <ul className="links">
          {navItems.map((item, index) => (
            <NavItem
              key={index}
              onClick={() => setToggle(false)}
              href={item}
              className="link"
            >
              {item}
            </NavItem>
          ))}
        </ul>
        <Hamburger toggleHamburgerMenu={toggleHamburgerMenu} toggle={toggle} />
      </nav>

      {toggle && (
        <ul className="mobile-links">
          {navItems.map((item, index) => (
            <NavItem
              key={index}
              onClick={() => setToggle(false)}
              href={item}
              className="mobile-link"
            >
              {item}
            </NavItem>
          ))}
        </ul>
      )}
    </header>
  );
}
