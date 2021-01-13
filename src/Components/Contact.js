import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact = ({ data }) => {
  if (data) {
    var name = data.name;
    var city = data.address.city;
    var state = data.address.state;
    var zip = data.address.zip;
    var phone = data.phone;
    var email = data.email;
  }

  return (
    <section id="contact">
      <div>
        <div>
          <a href="mailto:martajan218@gmail.com" target="_blank">
            <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
          </a>
        </div>
      </div>

      <div>
        <aside className="address-section">
          <div>
            <br />
            <h4>Address and Phone</h4>
            <p>
              <br />
              {name}
              <br />
              {city}, {state} {zip}
              <br />
              <span>{phone}</span>
              <br />
              <span>{email}</span>
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Contact;

