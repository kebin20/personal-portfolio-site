function AboutUs() {
  return (
    <section id="about" className="about">
      <div className="main-container">
        <h4 className="main-container__sm-title">About Me 🧑</h4>
        <h2 className="main-container__main-title">
          Here you will find more information about me, what I do, and list of
          my current skills in programming
        </h2>
        <div className="main-section">
          <div className="info">
            <div className="info__main-info">
              <h3 className="info__main-info__title">My Story </h3>
              <p className="info__main-info__text-primary">
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Error, aliquid! Itaque corrupti magnam fugiat mollitia labore
                  magni saepe veritatis voluptatum alias fugit. Explicabo
                  ducimus sequi aut corporis odio repellendus? Lorem ipsum dolor
                  sit amet
                </span>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Error, aliquid! Itaque corrupti magnam fugiat mollitia labore
                  magni saepe veritatis voluptatum alias fugit. Explicabo
                  ducimus sequi aut corporis odio repellendus? Lorem ipsum dolor
                  sit amet
                </span>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Error, aliquid! Itaque corrupti magnam fugiat mollitia labore
                  magni saepe veritatis voluptatum alias fugit. Explicabo
                  ducimus sequi aut corporis odio repellendus? Lorem ipsum dolor
                  sit amet
                </span>
              </p>
              <div className="btn-container">
                <a href="#projects" className="btn-container btn">
                  Projects
                </a>
              </div>
            </div>
            <div className="skill-info">
              <h4 className="main-container__sm-title">My Skills 💪</h4>
              <ul className="skill-info__skills">
                <li className="skill-info__skills__skill">html</li>
                <li className="skill-info__skills__skill">css</li>
                <li className="skill-info__skills__skill">javascript</li>
                <li className="skill-info__skills__skill">react</li>
                <li className="skill-info__skills__skill">typescript</li>
                <li className="skill-info__skills__skill">git</li>
                <li className="skill-info__skills__skill">vscode</li>
                <li className="skill-info__skills__skill">tailwind</li>
                <li className="skill-info__skills__skill">styled components</li>
                <li className="skill-info__skills__skill">sass</li>
                <li className="skill-info__skills__skill">firebase</li>
                <li className="skill-info__skills__skill">figma</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
