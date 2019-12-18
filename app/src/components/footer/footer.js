import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <ul className="socials round pb-20">
              <li>
                <a href="https://www.facebook.com/groups/158411205239/">
                  <i className="icon-facebook-circled"></i>
                  <span>Facebook</span>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/RojasCribillero">
                  <i className="icon-twitter-circled"></i>
                  <span>Twitter</span>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/jairo-rojas-3796b8148/">
                  <i className="icon-linkedin-circled"></i>
                  <span>Linkedin</span>
                </a>
              </li>
              {/* <li>
                <a href="#">
                  <i className="icon-dribbble-circled"></i>
                  <span>Dribbble</span>
                </a>
              </li> */}
            </ul>

            <hr />

            <p className="pt-20">
              &copy; 2019 all rights reserved. A product of{" "}
              <a href="http://jairorafaelrojas.com/" target="_blank">
                Jairo Rojas
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
