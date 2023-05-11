function AboutUs() {
  return (
    <section id="about" className="about">
      <div className="main-container">
        <h2 className="main-container__sm-title">About Me 🧑</h2>
        <h3 className="main-container__main-title">
          Here you will find information about me and a list of my current
          skills in programming
        </h3>
        <div className="main-section">
          <div className="info">
            <div className="info__main-info">
              <h3 className="info__main-info__title">Personal Summary </h3>
              <p className="info__main-info__text-primary">
                <span>
                  I&apos;m a highly motivated junior web developer with a year
                  of experience in creating visually stunning and functionally
                  impressive websites. I&apos;m passionate about blending design
                  and functionality to deliver a user-friendly experience that
                  exceeds client expectations. I have the skills to create
                  responsive layouts that look great on any device, and I&apos;m
                  committed to translating your ideas into an engaging online
                  presence. Let&apos;s work together to bring your website
                  dreams to life.
                </span>
                <span>
                  Come and have a look at my projects below and see my blog for
                  my learning takeaways!
                </span>
              </p>
              <div className="btn-container">
                <a
                  href="#projects"
                  className="btn-container btn"
                  aria-label="Go to projects"
                >
                  Projects
                </a>
                <a
                  href="https://dev.to/kebin20"
                  className="btn btn-alternate"
                  aria-label="Go to my personal blog on dev.to"
                >
                  Blog
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
