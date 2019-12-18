import React from "react";
import logo3 from './img/1.jpeg';

class Contact extends React.Component {
  render() {
    return (
      <div>
        <div className="block-teaser block-background-image overlay"
        style={{ backgroundImage: `url(${logo3})` }}>
          <div className="block-contact">
            <div id="map"></div>

            <div className="contact-overlay bg-grey-dark">
              <div className="block-title mb-60">
                <h2 className="title white">Send a Message</h2>
              </div>

              {/* <div className="block-form">
                <form
                  className="contact-form clearfix"
                  method="post"
                  action="http://www.demo.mutationmedia.net/DIFFERENCE/send.php"
                >
                  <input
                    type="text"
                    placeholder="Name *"
                    value=""
                    id="name"
                    name="name"
                  />
                  <input
                    type="text"
                    placeholder="Email *"
                    value=""
                    id="email"
                    name="email"
                  />
                  <input
                    type="text"
                    placeholder="Subject"
                    value=""
                    id="subject"
                    name="subject"
                  />
                  <textarea
                    name="message"
                    placeholder="Message *"
                    id="message"
                    cols="45"
                    rows="10"
                  ></textarea>
                  <input
                    type="submit"
                    value="Send Message"
                    className="but opc white submit"
                  />
                </form>

                <div id="success">
                  <h2>Your message has been sent. Thank you!</h2>
                </div>
                <div id="error">
                  <h2>Sorry your message can not be sent.</h2>
                </div>
              </div> */}
            </div>
          </div>
        </div>

        <div className="block-content bg-grey pt-80 pb-80">
          <div className="container">
            <div className="row">
              <div className="block-info-holder clearfix">
                <div className="col-sm-4">
                  <div className="block-info">
                    <div className="info-ico">
                      <span className="ico">
                        <i className="ic-phone"></i>
                      </span>
                    </div>

                    <div className="info-det">
                      <h5 className="mb-10">Call Me</h5>
                      <p>
                        Office : + 51 922-031-342
                        <br />
                        Cell : + 51 922-031-342
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-sm-4">
                  <div className="block-info">
                    <div className="info-ico">
                      <span className="ico">
                        <i className="ic-streetsign"></i>
                      </span>
                    </div>

                    <div className="info-det">
                      <h5 className="mb-10">Address</h5>
                      <p>
                        Sector 6 Grupo 13 Mz F lote 12 
                        <br /> Villa El Salvador, Lima.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-sm-4">
                  <div className="block-info">
                    <div className="info-ico">
                      <span className="ico">
                        <i className="ic-clock"></i>
                      </span>
                    </div>

                    <div className="info-det">
                      <h5 className="mb-10">Work hours</h5>
                      <p>
                        Monday - Friday : 09am - 18pm
                        <br />
                        Saturday : 09am - 1pm
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="block-content  t-center">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="block-feed">
                  <h6 className="uppercase mt-20 mb-20">
                    <i className="icon-instagram"></i>Instagram
                  </h6>

                  <ul className="insta-Feed" id="instafeed"></ul>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    );
  }
}

export default Contact;
