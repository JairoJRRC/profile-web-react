import React from "react";

class Blog extends React.Component {
  render() {
    return (
      <div className="block-content">
        <div className="container ">
          <div className="row">
            <div className="col-md-12">
              <div className="block-title mb-60">
                <h2 className="title">Latest News</h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="block-posts">
              <div className="col-md-4 col-sm-4  ">
                <div className="post latest">
                  <div className="post-media">
                    <img src="img/blog/1.jpg" alt="" />
                  </div>

                  <div className="post-details latest pb-20">
                    <h4 className="uppercase pt-15 pb-15">
                      <a href="blog_single.html">Raw Introduction</a>
                    </h4>

                    <div className="post-meta t-center pt-10 pb-10">
                      <ul className="clearfix">
                        <li className="date">03 May</li>
                        <li>
                          <i className="icon-user-1"></i>
                          <span>
                            by<a href="#"> admin</a>
                          </span>
                        </li>
                        <li>
                          <i className="icon-comment"></i>
                          <span>
                            Comments<a href="#"> (2)</a>
                          </span>
                        </li>
                      </ul>
                    </div>

                    <p className="pt-15 pb-20">
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud
                      exercitation.
                    </p>

                    <a className="more" href="blog_single.html">
                      read more <span>&rarr;</span>{" "}
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-sm-4">
                <div className="post latest">
                  <div className="post-media">
                    <img src="img/blog/2.jpg" alt="" />
                  </div>

                  <div className="post-details latest pb-20">
                    <h4 className="uppercase pt-15 pb-15">
                      <a href="blog_single.html">Mobile Design</a>
                    </h4>

                    <div className="post-meta t-center pt-10 pb-10">
                      <ul className="clearfix">
                        <li className="date">10 Fev</li>
                        <li>
                          <i className="icon-user-1"></i>
                          <span>
                            by<a href="#"> admin</a>
                          </span>
                        </li>
                        <li>
                          <i className="icon-comment"></i>
                          <span>
                            Comments<a href="#"> (2)</a>
                          </span>
                        </li>
                      </ul>
                    </div>

                    <p className="pt-15 pb-20">
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud
                      exercitation.
                    </p>

                    <a className="more" href="blog_single.html">
                      read more <span>&rarr;</span>{" "}
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-sm-4  ">
                <div className="post latest">
                  <div className="post-media">
                    <img src="img/blog/3.jpg" alt="" />
                  </div>

                  <div className="post-details latest pb-20">
                    <h4 className="uppercase pt-15 pb-15">
                      <a href="blog_single.html">Reading &amp; Blogging</a>
                    </h4>

                    <div className="post-meta t-center pt-10 pb-10">
                      <ul className="clearfix">
                        <li className="date">05 Sept</li>
                        <li>
                          <i className="icon-user-1"></i>
                          <span>
                            by<a href="#"> admin</a>
                          </span>
                        </li>
                        <li>
                          <i className="icon-comment"></i>
                          <span>
                            Comments<a href="#"> (2)</a>
                          </span>
                        </li>
                      </ul>
                    </div>

                    <p className="pt-15 pb-20">
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud
                      exercitation.
                    </p>

                    <a className="more" href="blog_single.html">
                      read more <span>&rarr;</span>{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12 t-center">
              <a className="but brd  white mt-80 mb-80 " href="blog.html">
                View All Blog Posts
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Blog;
