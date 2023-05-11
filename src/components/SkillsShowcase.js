import { Styledcomponents } from "@styled-icons/simple-icons/Styledcomponents";

function SkillsShowcase() {
  return (
    <section className="skills-showcase">
      <div>
        <ul className="skills-showcase__list">
          <li className="skills-showcase__list-item">
            <i className="devicon-html5-plain"></i>
          </li>
          <li className="skills-showcase__list-item">
            <i className="devicon-css3-plain"></i>
          </li>
          <li className="skills-showcase__list-item">
            <i className="devicon-javascript-plain"></i>
          </li>
          <li className="skills-showcase__list-item">
            <i className="devicon-react-original"></i>
          </li>
          <li className="skills-showcase__list-item">
            <i className="devicon-typescript-original"></i>
          </li>
          <li className="skills-showcase__list-item">
            <i className="devicon-git-plain"></i>
          </li>
          <li className="skills-showcase__list-item">
            <i className="devicon-vscode-plain"></i>
          </li>
          <li className="skills-showcase__list-item">
            <i className="devicon-tailwindcss-plain"></i>
          </li>
          <li className="skills-showcase__list-item">
            <Styledcomponents style={{ width: "6rem" }} />
          </li>
          <li className="skills-showcase__list-item">
            <i className="devicon-sass-plain"></i>
          </li>
          <li className="skills-showcase__list-item">
            <i className="devicon-firebase-plain"></i>
          </li>
          <li className="skills-showcase__list-item">
            <i className="devicon-figma-plain"></i>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default SkillsShowcase;
