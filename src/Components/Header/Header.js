import "./Header.css";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const items = [
  { title: "Home" },
  { title: "About" },
  { title: "Resume" },
  { title: "Portfolio" },
  { title: "Contact" },
];

const Header = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(null);

  const onCurrentSection = (index) => {
    setCurrentIndex(index);
  };

  const renderedItems = items.map((item, index) => {
    const current = index === currentIndex ? "current" : "";

    return (
      <li className={`${current}`} onClick={() => onCurrentSection(index)}>
        <a className="smoothscroll" href={`#${item.title.toLowerCase()}`}>
          {item.title}
        </a>
      </li>
    );
  });

  return (
    <>
      {data ? (
        <header id="home">
          <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
              Show navigation
            </a>
            <a className="mobile-btn" href="#home" title="Hide navigation">
              Hide navigation
            </a>

            <ul id="nav" className="nav">
              {renderedItems}
            </ul>
          </nav>

          <div className="row banner">
            <div className="banner-text">
              <h1 className="responsive-headline">I'm {data.name}</h1>
              <h3>
                I'm a {data.city} based <span>{data.occupation}</span>.{" "}
                {data.description}.
              </h3>
              <hr />

              <a
                href="https://github.com/MartaJank "
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} className="header-icon" />
              </a>
              <a
                href="https://www.linkedin.com/in/marta--jankowska/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} className="header-icon" />
              </a>
            </div>
          </div>
        </header>
      ) : null}
    </>
  );
};

export default Header;
