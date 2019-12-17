import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <ul className="socials round pb-20">
              <li>
                <a href="#">
                  <i className="icon-facebook-circled"></i>
                  <span>Facebook</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icon-twitter-circled"></i>
                  <span>Twitter</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icon-linkedin-circled"></i>
                  <span>Linkedin</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icon-dribbble-circled"></i>
                  <span>Dribbble</span>
                </a>
              </li>
            </ul>

            <hr />

            <p className="pt-20">
              &copy; 2016 all rights reserved. A product of{" "}
              <a href="http://www.mutationmedia.net/" target="_blank">
                Mutationthemes
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