function Footer() {
  return (
    <footer className="main-footer">
      <div className="main-footer__upper">
        <div className="main-container">
          <ul className="main-footer__links">
            <li className="main-footer__link">
              <a href="#home">Home</a>
            </li>
            <li className="main-footer__link">
              <a href="#about">About</a>
            </li>
            <li className="main-footer__link">
              <a href="#projects">Projects</a>
            </li>
            <li className="main-footer__link">
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <div className="main-footer__mid-line"></div>
        </div>
      </div>
      <div className="main-footer__bottom">
        <div className="main-container">
          <p className="main-footer__bottom-txt">
            <a target="_blank" href="https://github.com/rammcodes/wowfolio">
              Design based on WowFolio template by {""}
            </a>
            <a target="_blank" href="https://rammaheshwari.com">
              Ram Maheshwari{""}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
