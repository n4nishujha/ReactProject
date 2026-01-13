import React, { useEffect } from "react";
import Img1 from "../../assets/blog1.jpg";
import Img2 from "../../assets/blog2.jpg";
import Img3 from "../../assets/blog3.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Blogs.css";

const Blogs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <main
      className="blogs-grey-background"
      data-aos="fade-up"
      data-aos-offset="200"
    >
      <div className="blogs-background-wrapper">
        <div className="container">
          {/* Heading with left border */}
          <div className="row mb-5">
            <div className="col-12">
              <h1 className="section-heading">
                <span className="heading-border"></span>
                Services We Offer
              </h1>
            </div>
          </div>

          {/* Blog Cards Grid */}
          <div className="row g-4">
            {/* Card 1 */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="blog-card">
                <div className="blog-image-container">
                  <img src={Img1} alt="Blog" className="blog-image" />
                </div>
                {/*<div className="blog-meta d-flex justify-content-between pt-3">
                  <span className="blog-date">April 24, 2023</span>
                  <span className="blog-author">By Dilshad</span>
                </div>*/}
                <div className="blog-content pt-3">
                  <h3 className="blog-title">Web Development</h3>
                  <p className="blog-excerpt">
                    We build websites that appeal directly to your market,
                    convert visitors into customers, and are optimized for
                    search engines from day one. We also offer premium hosting
                    on our secure servers, monitored and maintained by our
                    expert team.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="blog-card">
                <div className="blog-image-container">
                  <img src={Img2} alt="Blog" className="blog-image" />
                </div>
                {/*<div className="blog-meta d-flex justify-content-between pt-3">
                  <span className="blog-date">June 3, 2024</span>
                  <span className="blog-author">By Akshay</span>
                </div> */}
                <div className="blog-content pt-3">
                  <h3 className="blog-title">Mobile Application</h3>
                  <p className="blog-excerpt">
                    We have proficient and experienced iOS app developers and
                    Android app developers who have a track record of completing
                    and delivering functional projects on time. From app
                    discovery to idea validation, development to testing, launch
                    to maintenance.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="blog-card">
                <div className="blog-image-container">
                  <img src={Img3} alt="Blog" className="blog-image" />
                </div>
                {/*<div className="blog-meta d-flex justify-content-between pt-3">
                  <span className="blog-date">Nov 24, 2025</span>
                  <span className="blog-author">By Satya</span>
                </div> */}
                <div className="blog-content pt-3">
                  <h3 className="blog-title">UX/UI Designing</h3>
                  <p className="blog-excerpt">
                    Our designs are based on extensive research of your target
                    market, your competitors and market conditions. We have a
                    team of expert members with more than 30 years of experience
                    creating highly usable and intuitive designs for the B2B
                    market.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="blogs-background-wrapper">
        <div className="container pt-0 pb-0">
          {/* Blog Cards Grid */}
          <div className="row g-4">
            {/* Card 1 */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="blog-card">
                <div className="blog-image-container">
                  <img src={Img1} alt="Blog" className="blog-image" />
                </div>
                {/*<div className="blog-meta d-flex justify-content-between pt-3">
                  <span className="blog-date">April 24, 2023</span>
                  <span className="blog-author">By Dilshad</span>
                </div>*/}
                <div className="blog-content pt-3">
                  <h3 className="blog-title">Graphic Designing</h3>
                  <p className="blog-excerpt">
                    We are passionate about our work , we create excellent
                    designs with our experience. We are providing website
                    designing to all kind of small to large scale business and
                    helping people to get individual website. We believe that
                    every Clint deserve a unique design for their project.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="blog-card">
                <div className="blog-image-container">
                  <img src={Img2} alt="Blog" className="blog-image" />
                </div>
                {/*<div className="blog-meta d-flex justify-content-between pt-3">
                  <span className="blog-date">June 3, 2024</span>
                  <span className="blog-author">By Akshay</span>
                </div> */}
                <div className="blog-content pt-3">
                  <h3 className="blog-title">Digital Marketing</h3>
                  <p className="blog-excerpt">
                    Our prime focus is on stability and durability of the
                    software Applications. We always follow proactive approach
                    to provide our clients the best Application Maintenance &
                    support. We always provide the updated application
                    management strategies that improves application performance
                    at a minimized maintenance cost.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="blog-card">
                <div className="blog-image-container">
                  <img src={Img3} alt="Blog" className="blog-image" />
                </div>
                {/*<div className="blog-meta d-flex justify-content-between pt-3">
                  <span className="blog-date">Nov 24, 2025</span>
                  <span className="blog-author">By Satya</span>
                </div> */}
                <div className="blog-content pt-3">
                  <h3 className="blog-title">Software Testing</h3>
                  <p className="blog-excerpt">
                    Our designs are based on extensive research of your target
                    market, your competitors and market conditions. We have a
                    team of expert members with more than 30 years of experience
                    creating highly usable and intuitive designs for the B2B
                    market.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Blogs;
