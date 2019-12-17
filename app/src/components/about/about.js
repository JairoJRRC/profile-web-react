import React from 'react';

class About extends React.Component {
    render(){
        return (
            <div className="block-content clearfix">
            <div className="block-about one bg-grey-1 ">
              <div className="block-title">
                <h2 className="title">Who am I ?</h2>
              </div>
              <h5 className="lead mt-40">
                Software Developer, entusiasta de las metodologías y técnicas
                ágiles,
              </h5>
              <p className="mt-20">
                tales como: Scrum, TDD, BDD, DDD, integración continua y Pair
                Programming. Mis preferencias se centran en el uso de
                tecnologías F.L.O.S.S, bajo entornos Unix/Linux/BSD en lenguajes
                como: Java, Python, PHP, JavaScript, aplicando tests unitarios,
                integración y end to end. Uso de base de datos relacionales: SQL
                y MySQL. Así como también no relacionales entre ellas MongoDB.
                Además, motores de búsqueda como Apache Solr y Elasticsearch.
              </p>
              <a href="#" className="but brd ico white mt-30">
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
                <li>
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
                </li>
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
                    <p>Aliquip ex ea commodo consequat.</p>
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
                    <p>Sed do eiusmod tempor incididunt.</p>
                  </div>
                </div>

                <div className="expertise clearfix">
                  <div className="exp-ico">
                    <span className="ico">
                      <i className="ic-phone"></i>
                    </span>
                  </div>

                  <div className="exp-det">
                    <h6>Mobile Design</h6>
                    <p>Ut enim ad minim veniam exercion.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
        );
    }
}

export default About;