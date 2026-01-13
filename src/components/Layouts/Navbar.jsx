import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-custom-purple py-3">
      <div className="container-fluid px-5">
        {/*-----------------------Logo-------------------------*/}
        <Link
          className="navbar-brand fw-bold fs-4 d-flex align-items-center gap-2"
          to="/"
        >
          <img src={Logo} alt="Logo" style={{ height: "48px" }} />
        </Link>

        {/*--------------------Toggle Button-------------------*/}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/*--------------Navbar Content---------------- */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center gap-4 ">
            {/*---------------Home------------------*/}
            <li className="nav-item fw-bold fs-5">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            {/*---------------About us------------------*/}
            <li className="nav-item fw-bold fs-5">
              <Link className="nav-link" to="/about">
                About us
              </Link>
            </li>
            {/*---------------Services------------------*/}
            <li className="nav-item dropdown fw-bold fs-5">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                Services
              </a>
              {/*----------Services DropDown------------*/}
              <ul className="dropdown-menu fw-bold fs-5">
                <li>
                  <a className="dropdown-item" href="#">
                    Web Development
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Mobile App Development
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    UI/UX Design
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Graphic Designing
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Digital Marketing
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Software Testing
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Application Support
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    IT Support & Services
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    HR Consultancy
                  </a>
                </li>

                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            {/*---------------Industries------------------*/}
            <li className="nav-item dropdown fw-bold fs-5">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                Industries
              </a>

              {/*----------Industries DropDown------------*/}
              <ul className="dropdown-menu fw-bold fs-5">
                <li>
                  <a className="dropdown-item" href="#">
                    Insurance
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Architecture & Design
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Hospital
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    IT Startup
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Real Estate
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>

            {/*---------------Pricing------------------*/}
            <li className="nav-item dropdown fw-bold fs-5">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                Pricing
              </a>

              {/*----------Pricing DropDown------------*/}
              <ul className="dropdown-menu fw-bold fs-5">
                <li>
                  <a className="dropdown-item" href="#">
                    Web App
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Mobile App
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>

            {/*---------------Products------------------*/}
            <li className="nav-item dropdown fw-bold fs-5">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                Products
              </a>

              {/*----------Products DropDown------------*/}
              <ul className="dropdown-menu fw-bold fs-5">
                <li>
                  <a className="dropdown-item" href="#">
                    LIC DO Portal
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    LIC DO App
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    LIC Agent App
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Agent CRM App
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    LIC Agent Mobile App
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    SMS Mobile App
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Real Estate App
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Hospital Mobile App
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>

            {/*---------------Others------------------*/}
            <li className="nav-item dropdown fw-bold fs-5">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                Others
              </a>

              {/*----------Others DropDown------------*/}
              <ul className="dropdown-menu fw-bold fs-5">
                <li>
                  <Link className="dropdown-item" to="/">
                    Home
                  </Link>
                </li>

                <li>
                  <a className="dropdown-item" href="#">
                    Portfolios
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Careers
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Blogs
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Our Teams
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Fun@NutanTek
                  </a>
                </li>
                <li>
                  <Link className="dropdown-item" to="/contactus">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/login">
                    Login
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>

            {/*----------Login Button------------*/}
            <li className="nav-item ">
              <Link
                to="/login"
                className="btn btn-primary px-3 fw-bold call-btn"
              >
                <div className="d-flex align-items-center gap-2">
                  <div className="d-flex flex-column text-start">
                    <div className="call-text">Login</div>
                  </div>
                </div>
              </Link>
            </li>

            {/*----------Call Button------------*/}
            {/*<li className="nav-item ">
              <a
                href="tel:+91123456789"
                className="btn btn-primary px-3 fw-bold call-btn"
              >
                <div className="d-flex align-items-center gap-2">
                  <div className="d-flex flex-column text-start">
                    <div className="call-text">📞 Call us on</div>
                    <div className="call-number">+91 123456789</div>
                  </div>
                </div>
              </a>
            </li>*/}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
