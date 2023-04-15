import MailIcon from "./UI/MailIcon";

function ContactMe() {
  return (
    <section id="contact" className="contact main-section">
      <div className="main-container">
        <h4 className="main-container__sm-title">Contact 📞</h4>
        <h2 className="main-container__main-title">
          Feel free to Contact me by via email or Linkedin and I will get back
          to you as soon as possible
        </h2>
        <div className="contact-container">
          <ul className="contact-container__list">
            <li className="contact-container__list-item">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/kevin-tanzyl/"
              >
                <i className="devicon-linkedin-plain"></i>
              </a>
            </li>
            <li className="contact-container__list-item">
              <a target="_blank" href="mailto:ktanzyl@hotmail.com">
                <MailIcon />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
export default ContactMe;
