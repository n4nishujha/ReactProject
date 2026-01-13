import React from "react";
import heroImg from "../../assets/hero.png";
import "./Hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero-sections position-relative">
      <div className="container-fluid hero-content">
        <div className="row align-items-center">
          {/* LEFT CONTENT */}
          <div className="col-lg-6 offset-lg-1 text-white hero-text">
            <h1 className="hero-title mb-3">
              We Build Website That Get <br />
              Trending On Webworld
            </h1>

            <p className="hero-description mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              ducimus eius quis ad enim aliquid.
            </p>

            <div className="hero-buttons">
              <Link to="/contactus" className="btn btn-primary">
                <b>Get Started</b>
              </Link>
              <Link to="/login" className="btn btn-outline-light ms-3">
                <b>Login for more Details!</b>
              </Link>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="col-lg-5">
            <div className="hero-image-container">
              <img
                src={heroImg}
                alt="App Dashboard"
                className="hero-main-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
