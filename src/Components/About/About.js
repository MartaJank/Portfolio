import "./About.css";
import React from "react";

const About = ({ data }) => {
  return (
    <>
      {data ? (
        <section id="about">
          <div className="row">
            <div className="three columns">
              <img
                className="profile-pic"
                src={data.image}
                alt="Marta Jankowska"
              />
            </div>
            <div className="nine columns main-col">
              <h2>About Me</h2>

              <p>{data.bio}</p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
                    <span>{data.name}</span>
                    <br />
                    <span>{data.phone}</span>
                    <br />
                    <span>{data.email}</span>
                  </p>
                </div>
                <div className="columns download">
                  <p>
                    <a
                      href={data.resumedownload}
                      target="_blank"
                      rel="noreferrer"
                      className="button"
                    >
                      Download Resume
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
};

export default About;
