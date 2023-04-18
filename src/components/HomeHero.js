import Image from "next/image";
import avatar from "../assets/kevin-avatar.png";

function HomeHero() {
  return (
    <section id="home-hero" className="home-hero">
      <div className="home-hero__content">
        <Image
          src={avatar}
          alt="personal profile picture"
          className="home-hero__content__hero-picture"
          priority={true}
        />
        <h1 className="home-hero__content__heading">
          Hey there, I&apos;m Kevin Tanzyl !
        </h1>
        <h2 className="home-hero__content__sub-heading">
          A Web Developer Building Awesome Webapps And Websites That Powers The
          Internet
        </h2>
        <div className="btn-container">
          <a href="#projects" className="btn">
            Projects
          </a>
          <a href="#contact" className="btn btn-alternate">
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}

export default HomeHero;
