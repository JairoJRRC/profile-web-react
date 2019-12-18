import React from "react";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="main-nav default">
        <div className="container ">
          <div className="row">
            <div className="mobile-menu-holder">
              <a className="mobile-btn" href="#">
                <i className="icon-menu"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="container ">
          <div className="row">
            <div className="col-sm-5 t-center">
              <ul className="menu first">
                <li>
                  <a className="scroll" href="#home">
                    Home<i className="icon-home"></i>
                  </a>
                </li>
                <li>
                  <a className="scroll" href="#about">
                    About<i className="icon-user"></i>
                  </a>
                </li>
                <li>
                  <a className="scroll" href="#resume">
                    Resume<i className="icon-doc-text-inv"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-sm-2 pd-0 t-center">
              <div className="img-profile">
                <img src={require('./img/1.jpeg')} alt="" />
              </div>
              <div className="name-profile">
                <h5>
                  <a className="scroll" href="#home">
                    Jairo Rojas<span>Web Designer / Developer</span>
                  </a>
                </h5>
              </div>
            </div>

            <div className="col-sm-5 t-center">
              <ul className="menu second">
                <li>
                  <a className="scroll" href="#portfolio">
                    Portfolio<i className="icon-camera"></i>
                  </a>
                </li>
                <li>
                  <a className="scroll" href="#blog">
                    Blog<i className="icon-chat"></i>
                  </a>
                </li>
                <li>
                  <a className="scroll" href="#contact">
                    Contact<i className="icon-paper-plane"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
