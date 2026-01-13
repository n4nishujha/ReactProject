import React from "react";
import Banner from "../../assets/blog2.jpg";
import "./BannerSection.css";
import { Link } from "react-router-dom";

const BannerSection = ({ reverse = false, img }) => {
  return (
    <section className="banner-section">
      <div className="container banner-container">
        <div className="row align-items-center g-0">
          {/* Text Content Column */}
          <div className={`col-12 col-md-6 ${reverse ? "order-md-2" : ""}`}>
            <div className="banner-content">
              <h1 className="banner-title">
                We Build the Product That Get Trending On Webworld
              </h1>
              <p className="banner-description">ToBeAgent Mobile App</p>
              <div className="banner-list">
                Our prime focus is on stability and durability of the software
                Applications. We always follow proactive approach to provide our
                clients the best Application Maintenance & support. We always
                provide the updated application management strategies that
                improves application performance at a minimized maintenance
                cost.
              </div>
              <div className="banner-buttons">
                <Link to="/about" className="btn btn-primary btn-custom">
                  Read More
                </Link>
              </div>
            </div>
          </div>

          {/* Image Column */}
          <div className={`col-12 col-md-6 ${reverse ? "order-md-1" : ""}`}>
            <div className="banner-image-container">
              <img
                src={img || Banner}
                alt="Banner"
                className="img-fluid banner-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
