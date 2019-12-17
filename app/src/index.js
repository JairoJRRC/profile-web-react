import React from "react";
import ReactDOM from "react-dom";

import "./css/bootstrap.css";
import "./css/magnific-popup.css";
import "./css/font.css";
import "./css/base.css";
import "./css/main.css";
import "./css/owl-carousel/owl.carousel.css";
import "./css/owl-carousel/owl.theme.css";

import Bloccontent from "./components/bloc-content/bloc-content";
import Navbar from "./components/navbar/navbar";
import About from "./components/about/about";
import Resume from "./components/resume/resume";
import Portfolio from "./components/portfolio/portfolio";
import Blog from "./components/blog/blog";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";

class App extends React.Component {
  render() {
    return (
      <div id="wraper">

        <section id="home" className="home">
          <div className="block-content ">
            <Bloccontent />
          </div>
        </section>

        <div className="nav-container base">
          <Navbar />
        </div>

        <section id="about" className="about">
          <About />
        </section>
        
        <section id="resume" className="resume pt-100 pb-80">
          <Resume />
        </section>

        <section id="portfolio" className="portfolio bg-grey  pt-100 pb-50">
          <Portfolio />
        </section>

        <section id="blog" className="blog pt-100">
          <Blog />
        </section>

        <section id="contact" className="contact">
          <Contact />
        </section>

        <footer className="footer t-center pt-60 pb-60">
          <Footer />
        </footer>
        
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
