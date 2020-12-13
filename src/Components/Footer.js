import React, { Component } from "react";

class Footer extends Component {
  render() {
    if (this.props.data) {
      var networks = this.props.data.social.map(function (network) {
        return (
          <li key={network.name}>
            <a href={network.url}>
              <i className={network.className}></i>
            </a>
          </li>
        );
      });
    }

    return (
      <footer>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">{networks}</ul>

            <ul className="copyright">
              <li>&copy; Copyright 2020 Marta Jankowska</li>
              <li>
                Reproduced and adapted from&nbsp;
                <a title="Styleshout" href="http://www.styleshout.com/">
                   Styleshout
                </a>
              </li>
            </ul>
          </div>
          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <img alt="go to top" src="https://res.cloudinary.com/martajank/image/upload/v1607859598/arrow-up-01-512_zyabyw.png"/>
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
