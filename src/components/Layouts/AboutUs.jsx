import React from "react";
import AboutUsImg from "../../assets/s3.jpg";
import "./AboutUs.css";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <main className="bg py-5 py-md-6">
      <div className="container">
        <div className="row align-items-center g-4 g-md-5">
          <div className="col-12 col-md-8 order-2 order-md-1">
            <div className="aboutus-text-content text-center text-md-start">
              <h1 className="aboutus-title mb-3">Leadership </h1>
              <h5>
                <b>Suresh C Gupta | Co-Founder & Managing Partner </b>
              </h5>
              <p className="aboutus-description mb-4 text-white">
                Suresh is the Co-Founder and Managing Partner of NutanTek. He
                pioneered in envisioning and setting up the company. As a Chief
                Mentor at NutanTek, Suresh drives all business strategies,
                innovations, new product development and quality initiatives.
                Suresh is a seasoned IT professional with over two decades of
                extensive experience in Project/Program/Delivery Management, IT
                Infrastructure Management, Human Resources Management, Manpower
                Planning & Recruitment. Prior to setting up NutanTek, Suresh
                held many leadership roles while working for major IT Companies
                like IBM China, Konylabs, Cyient, Mahindra Satyam and NIC, Govt.
                of India. He has been instrumental in setting up offshore
                delivery centres, Centre of Excellence for US customers and
                successfully managing large teams and delivering the software
                services.
              </p>
              <Link to="/contactus" className="btn btn-primary btn-custom">
                Get Started
              </Link>
            </div>
          </div>

          {/* Image Content */}
          <div className="col-8 col-lg-3 order-1 order-lg-1">
            <div className="aboutus-image-container">
              <img
                src={AboutUsImg}
                alt="Suresh C Gupta - Co-Founder & Managing Partner"
                className="img-fluid aboutus-image"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutUs;
