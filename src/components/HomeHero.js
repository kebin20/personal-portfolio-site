import Button from "./UI/Button";

function HomeHero() {
  return (
    <section id="home-hero" class="home-hero">
      <div className="home-hero__content">
        <h1 className="home-hero__content__heading">
          Hey there, <br />
          I&apos;m Kevin Tanzyl !
        </h1>
        <p class="home-hero__content__info">
          A Web Developer Building Awesome Webapps And Websites That Powers The
          Internet
        </p>
        <div className="btn-container">
          <Button className="btn">Projects</Button>
          <Button className="btn btn-alternate">Contact</Button>
        </div>
      </div>
    </section>
  );
}

export default HomeHero;
