function Hamburger({ toggleHamburgerMenu, toggle }) {
  return (
    <button
      id="hamburger-button"
      aria-label="Mobile Menu Button"
      onClick={toggleHamburgerMenu}
      className="hamburger-menu"
    >
      <span className={`${toggle && "open"} hamburger-top`}></span>
      <span className={`${toggle && "open"} hamburger-middle`}></span>
      <span className={`${toggle && "open"} hamburger-bottom`}></span>
    </button>
  );
}

export default Hamburger;
