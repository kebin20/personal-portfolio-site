import Button from "./UI/Button";
import Image from "next/image";
import coffeeRoastersImg from "../assets/project-screenshots/coffee-roasters.png";
import easyBankImg from "../assets/project-screenshots/easy-bank-landing-page.png";
import englishFlashcardImg from "../assets/project-screenshots/english-flashcard-app.png";
import ticTacToeImg from "../assets/project-screenshots/tic-tac-toe-react.png";
import todoAppImg from "../assets/project-screenshots/todo-react-app.png";
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
                    styled using CSS Modules. To ensure responsiveness,
                    mobile-first design principles were incorporated during
                    development.
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
                    I was able to use the useContext (useContext API) to make my code leaner.
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
            <div className="projects__list-item projects__list-item--inv">
              <div className="projects__list-item-details">
                <div className="projects__list-item-img-cont">
                  <Image
                    src={todoAppImg}
                    alt="Todo app"
                    className="projects__list-item-img"
                  />
                </div>
                <h3 className="heading-tertiary projects__list-item-heading-tertiary">
                  Nice Todo App
                </h3>

                <p className="text-primary projects__list-item-text-primary">
                  <span>
                    This is a todo app built using React, TypeScript, and
                    Firebase, with a simple filtering function to help users
                    manage their tasks more efficiently. The app is designed to
                    be responsive, automatically adapting to different screen
                    sizes and providing an optimal layout for all devices.
                  </span>

                  <span>
                    Users can add new tasks, mark them as complete, or delete
                    them from the list altogether. The app also offers a
                    filtering option, allowing users to view
                    all/active/completed todos based on their preference. In
                    addition, users can clear all completed todos and toggle
                    between light and dark mode for better accessibility and
                    customization.
                  </span>
                </p>
                <div className="btn-container">
                  <a href="https://nicetodoapp.netlify.app/" className="btn">
                    Live Link
                  </a>
                  <a
                    href="https://github.com/kebin20/todo-app-react"
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
                    src={ticTacToeImg}
                    alt="Tic tac toe app"
                    className="projects__list-item-img"
                  />
                </div>
                <h3 className="heading-tertiary projects__list-item-heading-tertiary">
                  Awesome Tic-Tac-Toe App
                </h3>

                <p className="text-primary projects__list-item-text-primary">
                  <span>
                    Tic Tac Toe app built using React and bundled with Vite for
                    optimized performance. Users can choose to play either
                    against the computer or in multiplayer mode against another
                    person. The app&apos;s responsive design ensures an optimal
                    layout on all devices,
                  </span>
                </p>
                <div className="btn-container">
                  <a
                    href="https://awesometictactoe.netlify.app/"
                    className="btn"
                  >
                    Live Link
                  </a>
                  <a
                    href="https://github.com/kebin20/tic-tac-toe-react"
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
