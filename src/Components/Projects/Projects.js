import React from "react";
import Slider from "react-slick";
import "./Projects.css";
import macbook from "../../Assets/MacBook Pro - 3.png";

const Projects = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="bg-dark " id="projects">
      <div className="container py-4" >
        <div className="py-4">
          <h1 className=" text-white fw-bold text-center">MY LATEST PROJECTS </h1>
          <div className="heading-seperator">
            <div className="seperator-line w-50 bg-light" />
            <div className="seperator-blob">
              <div />
            </div>
          </div>
        </div>

        <div className="row">
        <div className="col-md-6">
        


        </div>
          <div className="col-md-6">
            <div className="project-card-view card">
              <div className="img-card w-100"></div>
              <div className="card-body">
                <div className="card-title h5">Red-Onion</div>
                <p className="card-text mb-0" style={{ textAlign: "justify" }}>
                  A Single page E-commerce app where people are able to choice 3
                  category foods,order several items and check out order review
                  their order,use customer online pay and visit the blog Post
                  ##Deployment is pending{" "}
                </p>
                <div className="d-flex justify-content-around">
                  <a href="" target="_blank" className="btn btn-info my-1">
                    <i class="bi bi-box-arrow-up-right m-1"></i>Github
                  </a>
                  <a href="" target="_blank" className="btn btn-info my-1">
                    <i class="bi bi-box-arrow-up-right m-1"></i>Website
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="project-card-view card">
              <div className="img-card w-100"></div>
              <div className="card-body">
                <div className="card-title h5">Red-Onion</div>
                <p className="card-text mb-0" style={{ textAlign: "justify" }}>
                  A Single page E-commerce app where people are able to choice 3
                  category foods,order several items and check out order review
                  their order,use customer online pay and visit the blog Post
                  ##Deployment is pending{" "}
                </p>
                <div className="d-flex justify-content-around">
                  <a href="" target="_blank" className="btn btn-info my-1">
                    <i class="bi bi-box-arrow-up-right m-1"></i>Github
                  </a>
                  <a href="" target="_blank" className="btn btn-info my-1">
                    <i class="bi bi-box-arrow-up-right m-1"></i>Website
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="project-card-view card">
              <div className="img-card w-100"></div>
              <div className="card-body">
                <div className="card-title h5">Red-Onion</div>
                <p className="card-text mb-0" style={{ textAlign: "justify" }}>
                  A Single page E-commerce app where people are able to choice 3
                  category foods,order several items and check out order review
                  their order,use customer online pay and visit the blog Post
                  ##Deployment is pending{" "}
                </p>
                <div className="d-flex justify-content-around">
                  <a href="" target="_blank" className="btn btn-info my-1">
                    <i class="bi bi-box-arrow-up-right m-1"></i>Github
                  </a>
                  <a href="" target="_blank" className="btn btn-info my-1">
                    <i class="bi bi-box-arrow-up-right m-1"></i>Website
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
