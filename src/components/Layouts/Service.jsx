import React from "react";
import CountUp from "react-countup";
import "./Service.css";

const Service = () => {
  return (
    <section className="container-fluid service-section">
      <div className="container">
        <div className="row stats-container">
          <div className="col-6 col-md-3 stat-item">
            <h1 className="stat-number">
              <CountUp end={234} suffix="+" duration={2.75} />
            </h1>
            <h1 className="stat-label">Clients</h1>
          </div>
          <div className="col-6 col-md-3 stat-item">
            <h1 className="stat-number">
              <CountUp end={56} suffix="+" duration={2.75} />
            </h1>
            <h1 className="stat-label">Projects</h1>
          </div>
          <div className="col-6 col-md-3 stat-item">
            <h1 className="stat-number">
              <CountUp end={234} suffix="k+" />
            </h1>
            <h1 className="stat-label">Subscribers</h1>
          </div>
          <div className="col-6 col-md-3 stat-item">
            <h1 className="stat-number">
              <CountUp
                start={-875.039}
                end={160527.012}
                duration={2.75}
                separator=" "
                suffix="+"
              />
            </h1>
            <h1 className="stat-label">Clients</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
