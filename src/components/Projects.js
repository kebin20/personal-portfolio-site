import Button from "./UI/Button";
import Image from "next/image";
import coffeeRoastersImg from "../assets/project-screenshots/coffee-roasters.png";
import easyBankImg from "../assets/project-screenshots/easy-bank-landing-page.png";
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
                  <Image
                    src={coffeeRoastersImg}
                    alt="Coffee Roasters Site"
                    className="projects__list-item-img"
                  />
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
                  <Image
                    src={englishFlashcardImg}
                    alt="English flashcard app"
                    className="projects__list-item-img"
                  />
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
                    access and editing of deck layout and content.
                    Code was refactored by creating a custom hook to hold all the common business logic.
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
                  <Image
                    src={easyBankImg}
                    alt="Easybank landing page"
                    className="projects__list-item-img"
                  />
                </div>
                <h3 className="heading-tertiary projects__list-item-heading-tertiary">
                  Easybank Landing Page
                </h3>

                <p className="text-primary projects__list-item-text-primary">
                  <span>
                    This landing page is designed for a fictional bank company
                    called Easybank, and is built using Tailwind CSS and Vanilla
                    JavaScript. The page has been developed with mobile-first
                    design principles in mind, ensuring optimal user experience
                    across all devices.
                  </span>

                  <span>
                    The landing page effectively showcases the company&apos;s
                    brand and services, highlighting key features and benefits
                    through a well-designed and visually appealing layout. With
                    its user-friendly interface and seamless navigation, this
                    landing page provides an engaging and informative experience
                    for potential customers.
                  </span>
                </p>
                <div className="btn-container">
                  <a
                    href="https://kebin20.github.io/easybank-landing-page/"
                    className="btn"
                  >
                    Live Link
                  </a>
                  <a
                    href="https://github.com/kebin20/easybank-landing-page"
                    className="btn"
                  >
                    Code Link
                  </a>
                </div>
              </div>
            </div>
            {/* <div className="projects__list-item projects__list-item--inv">
              <div className="projects__list-item-details">
                <div className="projects__list-item-img-cont">
                  <Image
                    src={quizzicalImg}
                    alt="Quizzical"
                    className="projects__list-item-img"
                  />
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

                  <span>
                    The app&apos;s responsive design ensures an optimal layout
                    on all devices.
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
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
