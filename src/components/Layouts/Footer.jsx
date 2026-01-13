import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import Logo from "../../assets/logo.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
  FaEnvelope,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row">
          {/* Company Info Column */}
          <div className="col-12 col-md-4 mb-4 mb-md-0">
            <div className="footer-company-info">
              <h1 className="footer-logo mb-3">
                <a href="/#home" className="text-decoration-none text-white">
                  <img src={Logo} alt="Logo" style={{ height: "48px" }} />
                </a>
              </h1>
              <p className="footer-description">
                NutanTek is a young and dynamic professional services company
                that leverages the judicious mix of creativity, innovation and
                technology to provide the human-centred solutions to our
                customers.
              </p>
              <div className="footer-contact mt-4">
                <div className="contact-item d-flex align-items-center mb-2">
                  <FaLocationArrow className="me-2" />
                  <span>Ghaziabad, Uttar Pradesh</span>
                </div>
                <div className="contact-item d-flex align-items-center">
                  <FaMobileAlt className="me-2" />
                  <span>(+91) 770-200-0723</span>
                </div>
                <div className="contact-item d-flex align-items-center">
                  <FaEnvelope className="me-2" />
                  <span> info@nutantek.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div className="col-12 col-md-8">
            <div className="row">
              {/* Important Links Column */}
              <div className="col-6 col-md-4 mb-4 mb-md-0">
                <div className="footer-links">
                  <h3 className="footer-heading mb-3">Important Links</h3>
                  <ul className="footer-links-list list-unstyled">
                    <li className="footer-link-item mb-2">
                      <Link to="/" className="text-decoration-none text-white">
                        Home
                      </Link>
                    </li>
                    <li className="footer-link-item mb-2">
                      <Link
                        to="/about"
                        className="text-decoration-none text-white"
                      >
                        About
                      </Link>
                    </li>
                    <li className="footer-link-item mb-2">
                      <Link
                        to="/services"
                        className="text-decoration-none text-white"
                      >
                        Services
                      </Link>
                    </li>
                    <li className="footer-link-item">
                      <Link
                        to="/login"
                        className="text-decoration-none text-white"
                      >
                        Login
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Other Links Column */}
              <div className="col-6 col-md-4 mb-4 mb-md-0">
                <div className="footer-links">
                  <h3 className="footer-heading mb-3">Links</h3>
                  <ul className="footer-links-list list-unstyled">
                    <li className="footer-link-item mb-2">
                      <a href="#" className="text-decoration-none text-white">
                        Privacy Policy
                      </a>
                    </li>
                    <li className="footer-link-item mb-2">
                      <a href="#" className="text-decoration-none text-white">
                        Services
                      </a>
                    </li>
                    <li className="footer-link-item">
                      <Link
                        to="/about"
                        className="text-decoration-none text-white"
                      >
                        About us
                      </Link>
                    </li>
                    <li className="footer-link-item">
                      <Link
                        className="text-decoration-none text-white"
                        to="/contactus"
                      >
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Social Links Column */}
              <div className="col-12 col-md-4">
                <div className="footer-social">
                  <h3 className="footer-heading mb-3">Social Links</h3>
                  <p className="newsletter-text mb-3">
                    Subscribe to our newsletter
                  </p>
                  <div className="newsletter-input mb-4">
                    <input
                      type="email"
                      className="form-control rounded-pill"
                      placeholder="Email"
                      aria-label="Email"
                    />
                  </div>
                  <div className="social-icons d-flex">
                    <a
                      href="https://x.com/nutanteksolns"
                      className="social-icon me-3"
                    >
                      <FaTwitter className="fs-4" />
                    </a>
                    <a
                      href="https://www.facebook.com/w/?h=AeSoh52kUhBLnYo5"
                      className="social-icon me-3"
                    >
                      <FaFacebook className="fs-4" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/nutantek-solution-llp-a39584196/"
                      className="social-icon"
                    >
                      <FaLinkedin className="fs-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="footer-copyright mt-4 pt-4 border-top">
          <div className="text-center">
            @Copyright 2026 NutanTek Solutions LLP || All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
