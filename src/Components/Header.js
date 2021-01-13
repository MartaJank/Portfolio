import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Header = ({ data }) => {
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
              <li className="current">
                <a className="smoothscroll" href="#home">
                  Home
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#resume">
                  Resume
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#portfolio">
                  Works
                </a>
              </li>
              {/* <li>
            <a className="smoothscroll" href="#testimonials">
              Testimonials
            </a>
          </li> */}
              <li>
                <a className="smoothscroll" href="#contact">
                  Contact
                </a>
              </li>
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

              <a href="https://github.com/MartaJank " target="_blank">
                <FontAwesomeIcon icon={faGithub} className="header-icon" />
              </a>
              <a
                href="https://www.linkedin.com/in/marta--jankowska/"
                target="_blank"
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
