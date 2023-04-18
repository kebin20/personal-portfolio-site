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
        <h4 className="main-container__sm-title">Projects 🛠️</h4>
        <h2 className="main-container__main-title">
          Here you will find some of the personal and clients projects that I
          created with the project details
        </h2>
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
                  Project Name
                </h3>

                <p className="text-primary projects__list-item-text-primary">
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Error, aliquid! Itaque corrupti magnam fugiat mollitia
                    labore magni saepe veritatis voluptatum alias fugit.
                    Explicabo ducimus
                  </span>

                  <span>
                    sapiente aut corporis odio repellendus? Lorem ipsum dolor
                    sit amet, consectetur adipisicing elit
                  </span>
                </p>
                <div className="btn-container">
                  <Button className="btn">Live Link</Button>
                  <Button className="btn">Code Link</Button>
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
                  Project Name
                </h3>

                <p className="text-primary projects__list-item-text-primary">
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Error, aliquid! Itaque corrupti magnam fugiat mollitia
                    labore magni saepe veritatis voluptatum alias fugit.
                    Explicabo ducimus
                  </span>

                  <span>
                    sapiente aut corporis odio repellendus? Lorem ipsum dolor
                    sit amet, consectetur adipisicing elit
                  </span>
                </p>
                <div className="btn-container">
                  <Button className="btn">Live Link</Button>
                  <Button className="btn">Code Link</Button>
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
                  Project Name
                </h3>

                <p className="text-primary projects__list-item-text-primary">
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Error, aliquid! Itaque corrupti magnam fugiat mollitia
                    labore magni saepe veritatis voluptatum alias fugit.
                    Explicabo ducimus
                  </span>

                  <span>
                    sapiente aut corporis odio repellendus? Lorem ipsum dolor
                    sit amet, consectetur adipisicing elit
                  </span>
                </p>
                <div className="btn-container">
                  <Button className="btn">Live Link</Button>
                  <Button className="btn">Code Link</Button>
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
                  Project Name
                </h3>

                <p className="text-primary projects__list-item-text-primary">
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Error, aliquid! Itaque corrupti magnam fugiat mollitia
                    labore magni saepe veritatis voluptatum alias fugit.
                    Explicabo ducimus
                  </span>

                  <span>
                    sapiente aut corporis odio repellendus? Lorem ipsum dolor
                    sit amet, consectetur adipisicing elit
                  </span>
                </p>
                <div className="btn-container">
                  <Button className="btn">Live Link</Button>
                  <Button className="btn">Code Link</Button>
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
                  Project Name
                </h3>

                <p className="text-primary projects__list-item-text-primary">
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Error, aliquid! Itaque corrupti magnam fugiat mollitia
                    labore magni saepe veritatis voluptatum alias fugit.
                    Explicabo ducimus
                  </span>

                  <span>
                    sapiente aut corporis odio repellendus? Lorem ipsum dolor
                    sit amet, consectetur adipisicing elit
                  </span>
                </p>
                <div className="btn-container">
                  <Button className="btn">Live Link</Button>
                  <Button className="btn">Code Link</Button>
                </div>
              </div>
            </div>
            <div className="projects__list-item projects__list-item--inv">
              <div className="projects__list-item-details">
                <div className="projects__list-item-img-cont">
                  <Image
                    src={quizzicalImg}
                    alt="Todo app"
                    className="projects__list-item-img"
                  />
                </div>
                <h3 className="heading-tertiary projects__list-item-heading-tertiary">
                  Project Name
                </h3>

                <p className="text-primary projects__list-item-text-primary">
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Error, aliquid! Itaque corrupti magnam fugiat mollitia
                    labore magni saepe veritatis voluptatum alias fugit.
                    Explicabo ducimus
                  </span>

                  <span>
                    sapiente aut corporis odio repellendus? Lorem ipsum dolor
                    sit amet, consectetur adipisicing elit
                  </span>
                </p>
                <div className="btn-container">
                  <Button className="btn">Live Link</Button>
                  <Button className="btn">Code Link</Button>
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
