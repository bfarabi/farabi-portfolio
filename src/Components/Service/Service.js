import React from "react";
import "./Service.css";

const Service = () => {
  return (
    <div className="bg-light">
      <div className="container " id="service">
        <div className="py-4">
          <h1 className=" fw-bold text-center">MY SERVICE </h1>
          <div className="heading-seperator">
            <div className="seperator-line" />
            <div className="seperator-blob">
              <div />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="service-box bg-color-set">
              <div className="service-ico">
                <span style={{ color: "#ccd6f6" }} className="ico-circle">
                  <i className="bi bi-display"></i>
                </span>
              </div>
              <div className="service-content text-center">
                <h3 style={{ color: "#e7eaf5" }} className="s-title">
                  Web Design
                </h3>
                <p
                  style={{ color: "#ccd6f6" }}
                  className="s-description text-center"
                >
                  Qualified web designs and attractive effects which catches
                  visitor's Eye.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-box bg-color-set">
              <div className="service-ico">
                <span style={{ color: "#ccd6f6" }} className="ico-circle">
                  <i class="bi bi-code-slash"></i>
                </span>
              </div>
              <div className="service-content text-center">
                <h3 style={{ color: "#e7eaf5" }} className="s-title">
                  Web development
                </h3>
                <p
                  style={{ color: "#ccd6f6" }}
                  className="s-description text-center"
                >
                  Clean and fresh issue free code to make your website dynamic
                  perfectly.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-box bg-color-set">
              <div className="service-ico">
                <span style={{ color: "#ccd6f6" }} className="ico-circle">
                  <i class="bi bi-tablet"></i>
                </span>
              </div>
              <div className="service-content text-center">
                <h3 style={{ color: "#e7eaf5" }} className="s-title">
                  RESPONSIVE DESIGN
                </h3>
                <p
                  style={{ color: "#ccd6f6" }}
                  className="s-description text-center"
                >
                  Responsive Design which will be working almost all browsers
                  and screens, Mobile, TaB, PC etc
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
