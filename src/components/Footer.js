function Footer() {
  return (
    <footer className="main-footer">
      <div className="main-footer__upper">
        <div className="main-container">
          <ul className="main-footer__links">
            <li className="main-footer__link">
              <a href="#home" aria-label="Go to top of the page">Home</a>
            </li>
            <li className="main-footer__link">
              <a href="#about" aria-label="Go to my about section">About</a>
            </li>
            <li className="main-footer__link">
              <a href="#projects" aria-label="Go to my projects section">Projects</a>
            </li>
            <li className="main-footer__link">
              <a href="#contact" aria-label="Go to my contacts section">Contact</a>
            </li>
          </ul>
          <div className="main-footer__mid-line"></div>
        </div>
      </div>
      <div className="main-footer__bottom">
        <div className="main-container">
          <p className="main-footer__bottom-txt">
            <a target="_blank" href="https://github.com/rammcodes/wowfolio" aria-label="link to template on Github">
              Design based on WowFolio template by {""}
            </a>
            <a target="_blank" href="https://rammaheshwari.com" aria-label="link to template creator's website">
              Ram Maheshwari{""}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
