import React from "react";

class About extends React.Component {
  render() {
    return (
      <div className="block-content clearfix">
        <div className="block-about one bg-grey-1 ">
          <div className="block-title">
            <h2 className="title">Who am I ?</h2>
          </div>
          <h5 className="lead mt-40">
            Software Developer, a fan of agile methodologies and techniques,
            {/* Software Developer, entusiasta de las metodologías y técnicas
                ágiles, */}
          </h5>
          <p className="mt-20">
            such as: Scrum, TDD, BDD, DDD, continuous integration and Pair
            Programming. My preferences focus on the use of F.L.O.S.S
            technologies, under Unix / Linux / BSD environments in languages
            such as: Java, Python, PHP, JavaScript, applying unit tests,
            integration and end to end. Use of relational database: SQL and
            MySQL. As well as non-relational among them MongoDB. In addition,
            search engines such as Apache Solr and Elasticsearch.
            {/* tales como: Scrum, TDD, BDD, DDD, integración continua y Pair
                Programming. Mis preferencias se centran en el uso de
                tecnologías F.L.O.S.S, bajo entornos Unix/Linux/BSD en lenguajes
                como: Java, Python, PHP, JavaScript, aplicando tests unitarios,
                integración y end to end. Uso de base de datos relacionales: SQL
                y MySQL. Así como también no relacionales entre ellas MongoDB.
                Además, motores de búsqueda como Apache Solr y Elasticsearch. */}
          </p>
          <a
            className="but brd ico white mt-30"
            href={require("../../file/cv.pdf")}
            download
          >
            <i className="icon-down-circled2 "></i>Download My CV
          </a>
        </div>
        <div className="block-about two bg-grey-2 ">
          <div className="block-title">
            <h2 className="title">Personal Info</h2>
          </div>
          <ul className="mt-40 info">
            <li>
              <span>Birthdate</span> : 24/04/1997
            </li>
            <li>
              <span>Phone</span> : +51 922031342
            </li>
            <li>
              <span>Email</span> : jairo.rafa.1997@gmail.com
            </li>
            <li>
              <span>Skype</span> : jairo_rafa1997{" "}
            </li>
            <li>
              <span>Freelance</span> : Disponible
            </li>
          </ul>
          <ul className="mt-20 socials">
            <li>
              <a href="#">
                <i className="icon-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="icon-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="icon-gplus"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="icon-pinterest"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="icon-linkedin"></i>
              </a>
            </li>
            {/* <li>
                  <a href="#">
                    <i className="icon-dribbble"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icon-vimeo"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icon-flickr"></i>
                  </a>
                </li> */}
          </ul>
        </div>
        <div className="block-about three bg-grey-1">
          <div className="block-title">
            <h2 className="title">My Expertise</h2>
          </div>

          <div className="block-expertise mt-40">
            <div className="expertise mb-20 clearfix">
              <div className="exp-ico">
                <span className="ico">
                  <i className="ic-desktop"></i>
                </span>
              </div>

              <div className="exp-det">
                <h6>Web Design</h6>
                <p>
                  Activity that consists of planning, design, implementation and
                  maintenance of websites.
                </p>
              </div>
            </div>

            <div className="expertise mb-20 clearfix">
              <div className="exp-ico">
                <span className="ico">
                  <i className="ic-lock"></i>
                </span>
              </div>

              <div className="exp-det">
                <h6>Web Development</h6>
                <p>
                  Creation of websites for the Internet or an intranet. Use of
                  server-side and client-side software technologies.
                </p>
              </div>
            </div>

            <div className="expertise clearfix">
              <div className="exp-ico">
                <span className="ico">
                  <i className="ic-phone"></i>
                </span>
              </div>

              <div className="exp-det">
                <h6>Mobile Development</h6>
                <p>
                  Development of mobile application design and services for any
                  type of device.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
