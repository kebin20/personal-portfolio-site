import Image from "next/image";

function Footer() {
  return (
    <footer className="main-footer">
      <div className="main-footer__upper">
        <div className="main-container">
          <ul className="main-footer__links">
            <li className="main-footer__link">
              <a href="./index.html">Home</a>
            </li>
            <li className="main-footer__link">
              <a href="./index.html#about">About</a>
            </li>
            <li className="main-footer__link">
              <a href="./index.html#projects">Projects</a>
            </li>
            <li className="main-footer__link">
              <a href="./index.html#contact">Contact</a>
            </li>
          </ul>
          <div className="main-footer__mid-line"></div>
          <div className="main-footer__socials">
            <a href="#" className="main-footer__social-link">
              <Image src="" alt="" className="main-footer__social-link-icon" />
            </a>
            <a href="#" className="main-footer__social-link">
              <Image src="" alt="" className="main-footer__social-link-icon" />
            </a>
            <a href="#" className="main-footer__social-link">
              <Image src="" alt="" className="main-footer__social-link-icon" />
            </a>
            <a href="#" className="main-footer__social-link">
              <Image src="" alt="" className="main-footer__social-link-icon" />
            </a>
            <a href="#" className="main-footer__social-link">
              <Image src="" alt="" className="main-footer__social-link-icon" />
            </a>
          </div>
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
            <script>document.write(new Date().getFullYear())</script>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
