import MailIcon from "./UI/MailIcon";

function ContactMe() {
  return (
    <section id="contact" className="contact main-section">
      <div className="main-container">
        <h2 className="main-container__sm-title">Contact 📞</h2>
        <h3 className="main-container__main-title">
          Feel free to Contact me by via email or Linkedin and I will get back
          to you as soon as possible! Also see my Github for more projects!
        </h3>
        <div className="contact-container">
          <ul className="contact-container__list">
            <li className="contact-container__list-item">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/kevin-tanzyl/"
                aria-label="Go to my profile in LinkedIn"
              >
                <i className="devicon-linkedin-plain"></i>
              </a>
            </li>
            <li className="contact-container__list-item">
              <a target="_blank" href="mailto:ktanzyl@hotmail.com" aria-label="Email me for further contact">
                <MailIcon />
              </a>
            </li>
            <li className="contact-container__list-item">
              <a target="_blank" href="https://github.com/kebin20" aria-label="See my Github for more projects">
                <i className="devicon-github-plain"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
export default ContactMe;
