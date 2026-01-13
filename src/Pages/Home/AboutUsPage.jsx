import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import Footer from "../../components/Layouts/Footer";
import { Link } from "react-router-dom";
import "./AboutUsPage.css";

function AboutUsPage() {
  return (
    <div className="about-page">
      {/* Hero Section */}

      <section className="hero-section2 position-relative overflow-hidden">
        {/* Background Gradient */}
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-gradient-primary"></div>

        {/* Animated Background Elements */}
        <div className="position-absolute top-0 start-0 w-100 h-100">
          <div className="position-absolute top-0 start-0 w-100 h-100 bg-pattern"></div>
          <div className="position-absolute top-0 start-0 w-100 h-100">
            <div className="circle circle-1"></div>
            <div className="circle circle-2"></div>
            <div className="circle circle-3"></div>
          </div>
        </div>

        <div className="container position-relative z-3">
          <div className="row align-items-center min-vh-80 py-5">
            <div className="col-lg-6 mb-5 mb-lg-0">
              {/* Breadcrumb */}
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb breadcrumb-light">
                  <li className="breadcrumb-item">
                    <Link to="/" className="text-white-50 text-decoration-none">
                      Home
                    </Link>
                  </li>
                  <li
                    className="breadcrumb-item active text-white"
                    aria-current="page"
                  >
                    About Us
                  </li>
                </ol>
              </nav>

              {/* Main Heading */}
              <h1 className="display-3 fw-bold text-white mb-4">
                We're Building the Future of
                <span className="text-warning"> Digital Innovation</span>
              </h1>

              {/* Subtitle */}
              <p className="lead text-white mb-5">
                We're a team of passionate innovators dedicated to creating
                solutions that transform businesses and empower people. With
                over a decade of experience, we've helped 500+ companies achieve
                their digital goals.
              </p>

              {/* CTA Buttons */}
              <div className="d-flex flex-wrap gap-3">
                <Link
                  to="/contactus"
                  className="btn btn-light btn-lg px-4 py-3"
                >
                  <i className="bi bi-chat-dots me-2"></i>
                  Start a Project
                </Link>
                <Link to="/" className="btn btn-outline-light btn-lg px-4 py-3">
                  <i className="bi bi-play-circle me-2"></i>
                  Watch Our Story
                </Link>
              </div>
            </div>

            <div className="col-lg-6">
              {/* Hero Image with Animation */}
              <div className="position-relative">
                <div className="hero-image-wrapper">
                  <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                    alt="Team Collaboration"
                    className="img-fluid rounded-4 shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*--------------------Hero-Section3----------------*/}
        <section className="hero-section3 py-5 ">
          <div className="container">
            <div className="text-center mb-5">
              <h2 className="fw-bold">
                <b>
                  Give us a chance and we will change your business, forever !!
                </b>
              </h2>
            </div>
            <div className="row g-4">
              <div className="col-md-4">
                <p className="card-text">
                  At NutanTek, we are driven by innovation, technology, and a
                  strong commitment to delivering solutions that create
                  long-term value. We are an IT services company focused on
                  helping businesses transform, grow, and succeed in today’s
                  digital world through smart, reliable, and scalable technology
                  solutions.
                  <br />
                  Founded with the vision of empowering businesses through
                  technology, NutanTek works with startups, small businesses,
                  and enterprises to turn ideas into impactful digital products.
                  Our team combines deep technical expertise with strategic
                  thinking to solve real business challenges and deliver
                  measurable results.
                </p>
              </div>
              <div className="col-md-4">
                <p className="card-text">
                  Our mission is to provide innovative, future-ready IT
                  solutions that improve efficiency, accelerate growth, and
                  support long-term success. We strive to build technology that
                  not only meets current needs but also adapts as businesses
                  evolve.
                  <br />
                  Our vision is to become a trusted global IT partner,
                  recognized for excellence, innovation, and the ability to
                  create meaningful business transformation. We aim to help
                  organizations stay competitive by leveraging modern
                  technologies and best industry practices.
                  <br />
                </p>
              </div>
              <div className="col-md-4">
                <p className="card-text">
                  At NutanTek, we offer a wide range of IT services, including
                  custom software development, web and mobile application
                  development, cloud solutions, UI/UX design, and IT consulting
                  and support. Each service is carefully tailored to meet the
                  unique requirements of our clients.
                  <br />
                  We believe in building long-term partnerships and providing
                  continuous support to ensure our solutions deliver lasting
                  impact.
                  <br />
                  At NutanTek, we don’t just build technology—we build trust,
                  growth, and the future. Give us a chance, and we will change
                  your business—forever.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Mission & Values */}
        <section className="mission-section py-5">
          <div className="container">
            <div className="text-center mb-5">
              <h2 className="fw-bold">Our Mission & Values</h2>
              <p className="text">What drives us every day</p>
            </div>
            <div className="row g-4">
              <div className="col-md-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body text-center p-4">
                    <div className="icon-wrapper mb-3">
                      <span className="display-4">🎯</span>
                    </div>
                    <h4 className="card-title">Our Mission</h4>
                    <p className="card-text">
                      To become a best performer in the global marketplace by
                      Achieving highest client satisfaction and providing
                      innovative IT solution with best of skills, our aim is to
                      achieve this through excellent services and professional
                      skill by building life-long relationship with the client
                      along with achieving the highest client satisfaction.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body text-center p-4">
                    <div className="icon-wrapper mb-3">
                      <span className="display-4">💡</span>
                    </div>
                    <h4 className="card-title">Our Vision</h4>
                    <p className="card-text">
                      Fulfilling client requirements by delivering the best
                      technically sound and affordable business solutions, the
                      ultimate goal if success and emerge as a global company by
                      providing the superior quality services and solutions.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body text-center p-4">
                    <div className="icon-wrapper mb-3">
                      <span className="display-4">🤝</span>
                    </div>
                    <h4 className="card-title">Our Values</h4>
                    <p className="card-text">
                      To improve the business environment in the company. To
                      involve and encourage the value of honesty and integrity
                      amongst the team members by creating a supportive work
                      culture in the company.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Team Section */}
        <section className="team-section py-5 bg-light">
          <div className="container">
            <div className="text-center mb-5">
              <h2 className="fw-bold">Meet Our Team</h2>
              <p className="text-muted">
                Our team of IT professionals, Creative Designers and Analysts
                work cohesively to design and build smart IT solutions to enable
                brand-value enhancements of our customers. We are an
                award-winning team that transforms ideas into great experiences.
                We believe in "Lets Collaborate" within ourselves and with our
                clients, partners to ensure synergy and ultimate achievement of
                stakeholders goals Read More.
              </p>
            </div>
            <div className="row g-4">
              {/* Team Member 1 */}
              <div className="col-md-3 col-sm-6">
                <div className="card border-0 shadow-sm h-100">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                    className="card-img-top"
                    alt="Alex Johnson"
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title mb-1">Alex Johnson</h5>
                    <p className="text-muted">CEO & Founder</p>
                    <p className="card-text small">
                      Passionate about technology and entrepreneurship.
                    </p>
                  </div>
                </div>
              </div>
              {/* Team Member 2 */}
              <div className="col-md-3 col-sm-6">
                <div className="card border-0 shadow-sm h-100">
                  <img
                    src="https://images.unsplash.com/photo-1530047198515-516ff90fc4d9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    className="card-img-top"
                    alt="Maria Garcia"
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title mb-1">Maria Garcia</h5>
                    <p className="text-muted">CTO</p>
                    <p className="card-text small">
                      Tech visionary with 10+ years of experience.
                    </p>
                  </div>
                </div>
              </div>
              {/* Team Member 3 */}
              <div className="col-md-3 col-sm-6">
                <div className="card border-0 shadow-sm h-100">
                  <img
                    src="https://images.unsplash.com/photo-1598630388567-9fdbfd7e928e?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    className="card-img-top"
                    alt="David Chen"
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title mb-1">David Chen</h5>
                    <p className="text-muted">Head of Design</p>
                    <p className="card-text small">
                      Creates beautiful and functional user experiences.
                    </p>
                  </div>
                </div>
              </div>
              {/* Team Member 4 */}
              <div className="col-md-3 col-sm-6">
                <div className="card border-0 shadow-sm h-100">
                  <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    className="card-img-top"
                    alt="Sarah Williams"
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title mb-1">Sarah Williams</h5>
                    <p className="text-muted">Marketing Director</p>
                    <p className="card-text small">
                      Builds brands and connects with customers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section py-5  text-white">
          <div className="container text-center">
            <h2 className="mb-4">Ready to work with us?</h2>
            <p className="lead mb-4">
              Join thousands of satisfied customers who trust us with their
              projects.
            </p>
            <button className="btn btn-light btn-lg me-3">Get Started</button>

            <Link to="/" className="btn btn-outline-light btn-lg px-3 py-2">
              <i className="bi bi-play-circle me-2"></i>
              Contact Us
            </Link>
          </div>
        </section>
      </section>
    </div>
  );
}
export default AboutUsPage;
