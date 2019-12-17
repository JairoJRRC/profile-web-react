import React from "react";

class Resume extends React.Component {
  render() {
    return (
      <div>
        <div className="container ">
          <div className="row">
            <div className="col-md-12">
              <div className="block-title mb-60">
                <h2 className="title">My Resume</h2>
              </div>
            </div>
          </div>

          <div className="row masonry">
            <div className="block-content">
              <div className="col-md-4 col-sm-6 resume-boxe masonry">
                <div className="inner-resume-boxe">
                  <div className="block-icon">
                    <i className="ic-toolbox"></i>
                  </div>
                  <div className="block-title">
                    <h3 className="title medium">Expertise</h3>
                  </div>

                  <div className="timeline mt-40">
                    <div className="exp">
                      <div className="hgroup mb-5">
                        <h4>WebDesigner &ndash; Mutation Media </h4>
                        <h6>
                          Feb 2015 &ndash;{" "}
                          <span className="current">Current</span>
                        </h6>
                      </div>
                      <p>
                        Ut enim ad minim veniam, quis nostrud exerc, irure dolor
                        in reprehend.
                      </p>
                    </div>

                    <div className="exp">
                      <div className="hgroup mb-5">
                        <h4>Web Developer &ndash; Mutation Media </h4>
                        <h6>Sept 2015 &ndash; Nov 2015</h6>
                      </div>
                      <p>
                        Ut enim ad minim veniam, quis nostrud exerc, irure dolor
                        in reprehend.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-sm-6 resume-boxe masonry">
                <div className="inner-resume-boxe">
                  <div className="block-icon">
                    <i className="ic-pencil"></i>
                  </div>
                  <div className="block-title">
                    <h3 className="title medium">Education</h3>
                  </div>

                  <div className="timeline mt-40">
                    <div className="edu">
                      <div className="hgroup mb-5">
                        <h4>Ingles &ndash; Ice School </h4>
                        <h6>
                          July 2019 &ndash;{" "}
                          <span className="current">Current</span>
                        </h6>
                      </div>
                      <p>
                        Ut enim ad minim veniam, quis nostrud exerc, irure dolor
                        in reprehend.
                      </p>
                    </div>

                    <div className="edu">
                      <div className="hgroup mb-5">
                        <h4>Ingenieria de Sistemas &ndash; UPC </h4>
                        <h6>
                          January 2019 &ndash;{" "}
                          <span className="current">Current</span>
                        </h6>
                      </div>
                      <p>
                        Ut enim ad minim veniam, quis nostrud exerc, irure dolor
                        in reprehend.
                      </p>
                    </div>

                    <div className="edu">
                      <div className="hgroup mb-5">
                        <h4>Computación e Informática &ndash; CIBERTEC </h4>
                        <h6>July 2015 &ndash; July 2018</h6>
                      </div>
                      <p>
                        Ut enim ad minim veniam, quis nostrud exerc, irure dolor
                        in reprehend.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-sm-6 resume-boxe masonry">
                <div className="inner-resume-boxe">
                  <div className="block-icon">
                    <i className="ic-tools-2"></i>
                  </div>
                  <div className="block-title">
                    <h3 className="title medium">Skills</h3>
                  </div>

                  <div className="skills mt-40 ">
                    <ul className="skill-list clearfix">
                      <li>
                        <h4>HTML/CSS</h4>
                        <div className="rating">
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span className="transparent"></span>
                        </div>
                      </li>
                      <li>
                        <h4>Jquery</h4>
                        <div className="rating">
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span className="transparent"></span>
                        </div>
                      </li>

                      <li>
                        <h4>Photoshop</h4>
                        <div className="rating">
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span className="transparent"></span>
                        </div>
                      </li>
                      <li>
                        <h4>Illustrator</h4>
                        <div className="rating">
                          <span></span>
                          <span></span>
                          <span></span>
                          <span className="transparent"></span>
                          <span className="transparent"></span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-sm-6 resume-boxe masonry">
                <div className="inner-resume-boxe">
                  <div className="block-icon">
                    <i className="ic-mic"></i>
                  </div>
                  <div className="block-title">
                    <h3 className="title medium">Languages</h3>
                  </div>

                  <div className="skills mt-40 ">
                    <ul className="skill-list clearfix">
                      <li>
                        <h4>English</h4>
                        <div className="rating">
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span className="transparent"></span>
                        </div>
                      </li>
                      <li>
                        <h4>French</h4>
                        <div className="rating">
                          <span></span>
                          <span></span>
                          <span></span>
                          <span className="transparent"></span>
                          <span className="transparent"></span>
                        </div>
                      </li>
                      <li>
                        <h4>Spanish</h4>
                        <div className="rating">
                          <span></span>
                          <span></span>
                          <span className="transparent"></span>
                          <span className="transparent"></span>
                          <span className="transparent"></span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-sm-6 resume-boxe masonry">
                <div className="inner-resume-boxe">
                  <div className="block-icon">
                    <i className="ic-telescope"></i>
                  </div>
                  <div className="block-title">
                    <h3 className="title medium">Interests</h3>
                  </div>

                  <div className="hb-list mt-40 ">
                    <ul>
                      <li>
                        <span>
                          <i className="ic-megaphone"></i>
                        </span>
                        <h6>Music</h6>
                      </li>

                      <li>
                        <span>
                          <i className="ic-strategy"></i>
                        </span>
                        <h6>Gaming</h6>
                      </li>

                      <li>
                        <span>
                          <i className="ic-hotairballoon"></i>
                        </span>
                        <h6>Travel</h6>
                      </li>

                      <li>
                        <span>
                          <i className="ic-basket"></i>
                        </span>
                        <h6>Cooking</h6>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-sm-6 resume-boxe masonry">
                <div className="inner-resume-boxe">
                  <div className="block-icon">
                    <i className="ic-wallet"></i>
                  </div>
                  <div className="block-title">
                    <h3 className="title medium">Assets</h3>
                  </div>

                  <div className="ast-list mt-40 ">
                    <ul>
                      <li>
                        <span>Responsible</span>
                        <span>Diligence</span>
                        <span>Labour</span>
                      </li>

                      <li>
                        <span>Rigor</span>
                        <span>Creative</span>
                        <span>Funny</span>
                      </li>

                      <li>
                        <span>Great Communicator</span>
                        <span>Flexible</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="block-content mt-50 pb-80 clearfix">
              <ul className="fact-list">
                <li className="col-sm-3">
                  <div className="inner-fact clearfix">
                    <span className="ico-fact">
                      <i className="ic-hourglass"></i>
                    </span>
                    <div className="desc-fact">
                      <span className="count">400</span>Project Finished
                    </div>
                  </div>
                </li>

                <li className="col-sm-3">
                  <div className="inner-fact clearfix">
                    <span className="ico-fact">
                      <i className="ic-trophy"></i>
                    </span>
                    <div className="desc-fact">
                      <span className="count">320</span>Instagram Selfie
                    </div>
                  </div>
                </li>

                <li className="col-sm-3">
                  <div className="inner-fact clearfix">
                    <span className="ico-fact">
                      <i className="ic-lightbulb"></i>
                    </span>
                    <div className="desc-fact">
                      <span className="count">5623</span>Coffee Drinked
                    </div>
                  </div>
                </li>

                <li className="col-sm-3">
                  <div className="inner-fact clearfix">
                    <span className="ico-fact">
                      <i className="ic-heart"></i>
                    </span>
                    <div className="desc-fact">
                      <span className="count">1400</span>Facebook Likes
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="block-content bg-grey  pt-100 pb-80">
          <div className="container ">
            <div className="row">
              <div className="col-md-12">
                <div className="block-title mb-60">
                  <h2 className="title">Services</h2>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="block-service clearfix">
                <div className="col-sm-4 img">
                  <img src="img/img-service.jpg" alt="" />
                </div>

                <div className="col-sm-4">
                  <ul className="block-list-services mt-60">
                    <li className="mb-60 clearfix">
                      <div className="serv-ico">
                        <span className="ico">
                          <i className="ic-shield"></i>
                        </span>
                      </div>

                      <div className="serv-det">
                        <h5 className="mb-10">Great Support</h5>
                        <p>
                          Sed do eiusmod tempor incididunt ut labore et dolore
                          magna aliqua tu enim ad minim veniam.
                        </p>
                      </div>
                    </li>

                    <li className="mb-60 clearfix">
                      <div className="serv-ico">
                        <span className="ico">
                          <i className="ic-hotairballoon"></i>
                        </span>
                      </div>

                      <div className="serv-det">
                        <h5 className="mb-10">Print &amp; Branding</h5>
                        <p>
                          Sed do eiusmod tempor incididunt ut labore et dolore
                          magna aliqua tu enim ad minim veniam.
                        </p>
                      </div>
                    </li>

                    <li className=" mb-60 clearfix">
                      <div className="serv-ico">
                        <span className="ico">
                          <i className="ic-megaphone"></i>
                        </span>
                      </div>

                      <div className="serv-det">
                        <h5 className="mb-10">Marketing</h5>
                        <p>
                          Sed do eiusmod tempor incididunt ut labore et dolore
                          magna aliqua tu enim ad minim veniam.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="col-sm-4">
                  <ul className="block-list-services mt-60">
                    <li className="mb-60 clearfix">
                      <div className="serv-ico">
                        <span className="ico">
                          <i className="ic-key"></i>
                        </span>
                      </div>

                      <div className="serv-det">
                        <h5 className="mb-10">development</h5>
                        <p>
                          Sed do eiusmod tempor incididunt ut labore et dolore
                          magna aliqua tu enim ad minim veniam.
                        </p>
                      </div>
                    </li>

                    <li className="mb-60 clearfix">
                      <div className="serv-ico">
                        <span className="ico">
                          <i className="ic-lightbulb"></i>
                        </span>
                      </div>

                      <div className="serv-det">
                        <h5 className="mb-10">Branding</h5>
                        <p>
                          Sed do eiusmod tempor incididunt ut labore et dolore
                          magna aliqua tu enim ad minim veniam.
                        </p>
                      </div>
                    </li>

                    <li className=" clearfix">
                      <div className="serv-ico">
                        <span className="ico">
                          <i className="ic-laptop"></i>
                        </span>
                      </div>

                      <div className="serv-det">
                        <h5 className="mb-10">Web Design</h5>
                        <p>
                          Sed do eiusmod tempor incididunt ut labore et dolore
                          magna aliqua tu enim ad minim veniam.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="block-content clearfix  t-center pt-60 pb-60">
          <div className="container ">
            <div className="row">
              <div className="block-client clearfix ">
                <ul id="client-carousel">
                  <li>
                    <img src="img/logo/l1.png" alt="" />
                  </li>
                  <li>
                    <img src="img/logo/l2.png" alt="" />
                  </li>
                  <li>
                    <img src="img/logo/l3.png" alt="" />
                  </li>
                  <li>
                    <img src="img/logo/l4.png" alt="" />
                  </li>
                  <li>
                    <img src="img/logo/l5.png" alt="" />
                  </li>
                  <li>
                    <img src="img/logo/l6.png" alt="" />
                  </li>
                  <li>
                    <img src="img/logo/l7.png" alt="" />
                  </li>
                  <li>
                    <img src="img/logo/l8.png" alt="" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div
          className="block-content t-center block-background-image medium overlay"
          data-background="img/parallax/5.jpg"
        >
          <div className="block-testi ">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="testi-thumbs">
                    <ul className="thumbs">
                      <li>
                        <a className="t-active" href="#testi-1">
                          <img src="img/testimonial/1.jpg" alt="" />
                          <span></span>
                        </a>
                      </li>
                      <li>
                        <a href="#testi-2">
                          <img src="img/testimonial/2.jpg" alt="" />
                          <span></span>
                        </a>
                      </li>
                      <li>
                        <a href="#testi-3">
                          <img src="img/testimonial/3.jpg" alt="" />
                          <span></span>
                        </a>
                      </li>
                      <li>
                        <a href="#testi-4">
                          <img src="img/testimonial/4.jpg" alt="" />
                          <span></span>
                        </a>
                      </li>
                      <li>
                        <a href="#testi-5">
                          <img src="img/testimonial/5.jpg" alt="" />
                          <span></span>
                        </a>
                      </li>
                    </ul>

                    <h3 className="white mt-50 mb-20">
                      Peaple appreciate working with difference vCard
                    </h3>
                  </div>

                  <div className="testi-details mt-10">
                    <div id="testi-1" className="td first">
                      <blockquote className="mb-40">
                        Being the richest man in the cemetery doesn't matter to
                        me. Going to bed at night saying we've done
                        <br /> something wonderful... that's what matters to me
                      </blockquote>
                      <h6>Tim Cook</h6>
                      <span> CEO and Founder</span>
                    </div>

                    <div id="testi-2" className="td">
                      <blockquote className="mb-40">
                        If you keep your eye on the profit, you’re going to
                        skimp on the product. But if you focus on making
                        <br /> really great products, then the profits will
                        follow.
                      </blockquote>
                      <h6>Steve Jobs</h6>
                      <span> CEO and Founder</span>
                    </div>

                    <div id="testi-3" className="td">
                      <blockquote className="mb-40">
                        Being the richest man in the cemetery doesn't matter to
                        me. Going to bed at night saying we've done
                        <br /> something wonderful... that's what matters to me
                      </blockquote>
                      <h6>Tim Cook</h6>
                      <span>CEO and Founder</span>
                    </div>

                    <div id="testi-4" className="td">
                      <blockquote className="mb-40">
                        If you keep your eye on the profit, you’re going to
                        skimp on the product. But if you focus on making
                        <br /> really great products, then the profits will
                        follow.
                      </blockquote>
                      <h6>Steve Jobs</h6>
                      <span>CEO and Founder</span>
                    </div>

                    <div id="testi-5" className="td">
                      <blockquote className="mb-40">
                        Being the richest man in the cemetery doesn't matter to
                        me. Going to bed at night saying we've done
                        <br /> something wonderful... that's what matters to me
                      </blockquote>
                      <h6>Tim Cook</h6>
                      <span>CEO and Founder</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="block-content mt-100">
          <div className="block-pricing ">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="block-title mb-60">
                    <h2 className="title">Packs Pricing</h2>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="block-table clearfix t-center">
                  <div className="col-md-3 col-sm-6">
                    <div className="table pt-50 pb-40">
                      <h6>Starter</h6>
                      <div className="block-price mt-50 mb-40">
                        <span className="dollar">$</span>
                        <span className="price">30</span>
                        <span className="per">/mo</span>
                      </div>

                      <ul>
                        <li>Branding</li>
                        <li>Logo Design</li>
                        <li>Web Design</li>
                        <li>
                          <span>Web Development</span>
                        </li>
                        <li>
                          <span>Apps Design</span>
                        </li>
                        <li>
                          <span>Apps SDK</span>
                        </li>
                        <li>
                          <span>SEO Optimization</span>
                        </li>
                      </ul>

                      <a className="but brd mt-40 white" href="#">
                        Order Now
                      </a>
                    </div>
                  </div>

                  <div className="col-md-3 col-sm-6">
                    <div className="table pt-50 pb-40">
                      <h6>Intermediate</h6>
                      <div className="block-price mt-50 mb-40">
                        <span className="dollar">$</span>
                        <span className="price">60</span>
                        <span className="per">/mo</span>
                      </div>

                      <ul>
                        <li>Branding</li>
                        <li>Logo Design</li>
                        <li>Web Design</li>
                        <li>Web Development</li>
                        <li>
                          <span>Apps Design</span>
                        </li>
                        <li>
                          <span>Apps SDK</span>
                        </li>
                        <li>
                          <span>SEO Optimization</span>
                        </li>
                      </ul>

                      <a className="but brd mt-40 white" href="#">
                        Order Now
                      </a>
                    </div>
                  </div>

                  <div className="col-md-3 col-sm-6">
                    <div className="table pt-50 pb-40">
                      <h6>Professional</h6>
                      <div className="block-price mt-50 mb-40">
                        <span className="dollar">$</span>
                        <span className="price">120</span>
                        <span className="per">/mo</span>
                      </div>

                      <ul>
                        <li>Branding</li>
                        <li>Logo Design</li>
                        <li>Web Design</li>
                        <li>Web Development</li>
                        <li>Apps Design</li>
                        <li>
                          <span>Apps SDK</span>
                        </li>
                        <li>
                          <span>SEO Optimization</span>
                        </li>
                      </ul>

                      <a className="but brd mt-40 white" href="#">
                        Order Now
                      </a>
                    </div>
                  </div>

                  <div className="col-md-3 col-sm-6">
                    <div className="table pt-50 pb-40">
                      <h6>Advanced</h6>
                      <div className="block-price mt-50 mb-40">
                        <span className="dollar">$</span>
                        <span className="price">240</span>
                        <span className="per">/mo</span>
                      </div>

                      <ul>
                        <li>Branding</li>
                        <li>Logo Design</li>
                        <li>Web Design</li>
                        <li>Web Development</li>
                        <li>Apps Design</li>
                        <li>Apps SDK</li>
                        <li>SEO Optimization</li>
                      </ul>

                      <a className="but brd mt-40 white" href="#">
                        Order Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-sm-12">
                  <div className="block-more-info mt-20">
                    <p className="short-email">
                      * For further info or questions, please send me an email
                      at <a href="#">contact@gmail.com</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Resume;
