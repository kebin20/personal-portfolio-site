import Image from "next/image";
import coffeeRoastersImg from "../assets/project-screenshots/coffee-roasters.png";
import payApiImg from "../assets/project-screenshots/pay-api-website.png";
import englishFlashcardImg from "../assets/project-screenshots/english-flashcard-app.png";
import quizzicalImg from "../assets/project-screenshots/quizzical.png";

function Projects() {
  return (
    <section id="projects" className="projects main-section">
      <div className="main-container">
        <h2 className="main-container__sm-title">Projects 🛠️</h2>
        <h3 className="main-container__main-title">
          Here you will find some of the personal projects that I created with
          the project details
        </h3>
        <div className="main-section__content">
          <div className="projects__list">
            <div className="projects__list-item">
              <div className="projects__list-item-details">
                <div className="projects__list-item-img-cont">
                  <a href="https://thecoffeeroasters.netlify.app/">
                    <Image
                      src={coffeeRoastersImg}
                      alt="Coffee Roasters Site"
                      className="projects__list-item-img"
                    />
                  </a>
                </div>
                <h3 className="heading-tertiary projects__list-item-heading-tertiary">
                  Coffee Roasters Website
                </h3>

                <p className="text-primary projects__list-item-text-primary">
                  <span>
                    This is a coffee beans ordering website, where users can
                    easily create a coffee subscription with their preferred
                    selection of beans. The website is built using React and
                    TypeScript, with routing facilitated via React Router, and
                    styled using CSS Modules.
                  </span>

                  <span>
                    The website also includes an order summary modal that allows
                    users to review their selected options before finalizing
                    their order. In the future, there are plans to implement a
                    register and login page, as well as a shopping cart function
                    to enhance the user experience.
                  </span>
                </p>
                <div className="btn-container">
                  <a
                    href="https://thecoffeeroasters.netlify.app/"
                    className="btn"
                  >
                    Live Link
                  </a>
                  <a
                    href="https://github.com/kebin20/coffee-roasters-website"
                    className="btn"
                  >
                    Code Link
                  </a>
                </div>
              </div>
            </div>
            <div className="projects__list-item projects__list-item--inv">
              <div className="projects__list-item-details">
                <div className="projects__list-item-img-cont">
                  <a href="https://english-flashcard.netlify.app/">
                    <Image
                      src={englishFlashcardImg}
                      alt="English flashcard app"
                      className="projects__list-item-img"
                    />
                  </a>
                </div>
                <h3 className="heading-tertiary projects__list-item-heading-tertiary">
                  English Flashcards App
                </h3>

                <p className="text-primary projects__list-item-text-primary">
                  <span>
                    This is a flashcard app designed to help ES students revise
                    their vocabulary. The app is built using React and
                    TypeScript, with styling achieved through styled-components.
                    The main flashcard data is stored in Firebase, enabling easy
                    access and editing of deck layout and content. Code was
                    refactored by creating a custom hook to hold all the common
                    business logic.
                  </span>

                  <span>
                    With this app, students can easily revise cards that require
                    further attention, as well as remove cards they have already
                    learned from their deck. It is highly accessible as students
                    will be able to access it not just on their school tablets,
                    but on their home devices as well.
                  </span>
                </p>
                <div className="btn-container">
                  <a
                    href="https://english-flashcard.netlify.app/"
                    className="btn"
                  >
                    Live Link
                  </a>
                  <a
                    href="https://github.com/kebin20/english-flashcards-app"
                    className="btn"
                  >
                    Code Link
                  </a>
                </div>
              </div>
            </div>
            <div className="projects__list-item">
              <div className="projects__list-item-details">
                <div className="projects__list-item-img-cont">
                  <a href="https://github.com/kebin20/payapi-multi-page-website">
                    <Image
                      src={payApiImg}
                      alt="PayAPI landing page"
                      className="projects__list-item-img"
                    />
                  </a>
                </div>
                <h3 className="heading-tertiary projects__list-item-heading-tertiary">
                  PayAPI Mock Website
                </h3>

                <p className="text-primary projects__list-item-text-primary">
                  <span>
                    A mock API service website built with NextJS, styled with
                    Tailwind with form validation via React Hook Forms for
                    contact request. Contact data and inquiries are handled and
                    stored via MongoDB Atlas.
                  </span>
                </p>
                <div className="btn-container">
                  <a
                    href="https://payapi-multi-page-website-kebin20s-projects.vercel.app/"
                    className="btn"
                  >
                    Live Link
                  </a>
                  <a
                    href="https://github.com/kebin20/payapi-multi-page-website"
                    className="btn"
                  >
                    Code Link
                  </a>
                </div>
              </div>
            </div>
            <div className="projects__list-item projects__list-item--inv">
              <div className="projects__list-item-details">
                <div className="projects__list-item-img-cont">
                  <a href="https://quizzicalistic.netlify.app/" className="btn">
                    <Image
                      src={quizzicalImg}
                      alt="Quizzical"
                      className="projects__list-item-img"
                    />
                  </a>
                </div>
                <h3 className="heading-tertiary projects__list-item-heading-tertiary">
                  Quizzical
                </h3>

                <p className="text-primary projects__list-item-text-primary">
                  <span>
                    This is a quiz app built using React, TypeScript, and
                    styled-components that pulls quiz data from the Open Trivia
                    Database. The app provides users with a set of five
                    questions to answer, complete with answer checking
                    functionality for added convenience.
                  </span>
                </p>
                <div className="btn-container">
                  <a href="https://quizzicalistic.netlify.app/" className="btn">
                    Live Link
                  </a>
                  <a
                    href="https://github.com/kebin20/quizzical"
                    className="btn"
                  >
                    Code Link
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
