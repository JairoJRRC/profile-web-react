import React from "react";

class Portfolio extends React.Component {
  render() {
    return (
      <div className="block-content">
        <div className="container ">
          <div className="row">
            <div className="col-md-12">
              <div className="block-title mb-60">
                <h2 className="title">Portfolio</h2>
              </div>
            </div>
          </div>

          <div className="block-works">
            <div className="row">
              <div className="col-sm-12">
                <div className="block-filter mb-50">
                  <ul className="filter">
                    <li>
                      <a className="active" href="#" data-filter="all">
                        All
                      </a>
                    </li>
                    <li>
                      <a href="#" data-filter="web">
                        Web Design
                      </a>
                    </li>
                    <li>
                      <a href="#" data-filter="graphic">
                        Graphic Design
                      </a>
                    </li>
                    <li>
                      <a href="#" data-filter="motion">
                        Motion Graphic
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="row masonry">
              <div className="col-md-3 col-sm-6  masonry item-block">
                <div className="item web">
                  <a href="project_single.html">
                    <div className="desc">
                      <span>in web design</span>
                      <h5>Project Name</h5>
                    </div>

                    <img src={require('./img/1.jpg')} alt="" />
                  </a>
                </div>
              </div>

              <div className="col-md-3 col-sm-6  masonry item-block">
                <div className=" item web ">
                  <a href={require('./img/2.jpg')} className="popup">
                    <div className="desc">
                      <span>in web design</span>
                      <h5>Project Name</h5>
                    </div>

                    <img src={require('./img/2.jpg')} alt="" />
                  </a>
                </div>
              </div>

              <div className="col-md-3 col-sm-6  masonry item-block">
                <div className=" item graphic">
                  <a href={require('./img/3.jpg')} className="popup">
                    <div className="desc">
                      <span>in graphic design</span>
                      <h5>Project Name</h5>
                    </div>

                    <img src={require('./img/3.jpg')} alt="" />
                  </a>
                </div>
              </div>

              <div className="col-md-3 col-sm-6  masonry item-block">
                <div className=" item graphic">
                  <a href={require('./img/4.jpg')} className="popup">
                    <div className="desc graphic">
                      <span>in graphic design</span>
                      <h5>Project Name</h5>
                    </div>

                    <img src={require('./img/4.jpg')} alt="" />
                  </a>
                </div>
              </div>

              <div className="col-md-3 col-sm-6 masonry item-block">
                <div className=" item graphic">
                  <a href={require('./img/5.jpg')} className="popup">
                    <div className="desc">
                      <span>in graphic design</span>
                      <h5>Project Name</h5>
                    </div>

                    <img src={require('./img/5.jpg')} alt="" />
                  </a>
                </div>
              </div>

              <div className="col-md-3 col-sm-6 masonry item-block">
                <div className=" item web">
                  <a href={require('./img/6.jpg')} className="popup">
                    <div className="desc">
                      <span>in web design</span>
                      <h5>Project Name</h5>
                    </div>

                    <img src={require('./img/6.jpg')} alt="" />
                  </a>
                </div>
              </div>

              <div className="col-md-3 col-sm-6 masonry item-block">
                <div className=" item motion">
                  <a className="popup-vimeo" href="https://vimeo.com/67429593">
                    <div className="desc">
                      <span>in motion design</span>
                      <h5>Project Name</h5>
                    </div>

                    <img src={require('./img/7.jpg')} alt="" />
                  </a>
                </div>
              </div>

              <div className="col-md-3 col-sm-6 masonry item-block">
                <div className=" item motion">
                  <a
                    className="popup-youtube"
                    href="https://www.youtube.com/watch?v=gTFljCRnGN4"
                  >
                    <div className="desc">
                      <span>in motion design</span>
                      <h5>Project Name</h5>
                    </div>

                    <img src={require('./img/9.jpg')} alt="" />
                  </a>
                </div>
              </div>

              <div className="col-md-3 col-sm-6 masonry item-block">
                <div className=" item web">
                  <a href="http://www.mutationmedia.net/" target="_blank">
                    <div className="desc">
                      <span>in web design</span>
                      <h5>Project Name</h5>
                    </div>

                    <img src={require('./img/10.jpg')} alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
