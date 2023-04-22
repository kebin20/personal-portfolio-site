function AboutUs() {
  return (
    <section id="about" className="about">
      <div className="main-container">
        <h2 className="main-container__sm-title">About Me 🧑</h2>
        <h3 className="main-container__main-title">
          Here you will find more information about me, what I do, and list of
          my current skills in programming
        </h3>
        <div className="main-section">
          <div className="info">
            <div className="info__main-info">
              <h3 className="info__main-info__title">My Story </h3>
              <p className="info__main-info__text-primary">
                <span>
                  I&apos;ve been on my web development journey for almost a year
                  now, and it all started when I saw my friend&apos;s incredible
                  IDE setup for the first time. Witnessing the amazing things he
                  created motivated me to explore web development myself. The
                  timing was perfect too, since I had recently passed the
                  Japanese Language Proficiency Test (receiving the highest
                  rank, N1) and was eager to take on a new challenge in my free
                  time.
                </span>
                <span>
                  At first, web development seemed like a fun way to create
                  personal websites and explore the rewarding aspect of building
                  something from scratch. I&apos;ve always been fascinated by
                  technology, ever since I was young and tinkering with devices,
                  and I believe staying up-to-date with the latest tech is
                  crucial in today&apos;s world. These became my drive to study
                  hard in web development.
                </span>
                <span>
                  However, my journey wasn&apos;t without its challenges. As I
                  delved deeper into my studies, I struggled a lot with
                  JavaScript - and I still do! I&apos;ve had many hair-pulling
                  sessions trying to figure out why a piece of code isn&apos;t
                  working, whether it&apos;s a missing semicolon or a mistyped
                  name. But through these struggles, I&apos;ve learned a lot,
                  and I&apos;m still excited to keep learning more. While I know
                  there&apos;s still much more to learn, I feel more confident
                  in my skills than I did last year (trust me, my very first
                  website was terrible!).
                </span>
                <span>
                  Right now, I&apos;m focusing on improving my front-end skills
                  and becoming more comfortable with it. Once I&apos;ve gained
                  more experience, I may explore the backend side of things. But
                  for now, one step at a time.{" "}
                </span>
                <span>Come and have a look at my projects below!</span>
              </p>
              <div className="btn-container">
                <a href="#projects" className="btn-container btn" aria-label="Go to projects">
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
