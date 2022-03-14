import React from "react";
import Typical from "react-typical";
import Navbar from "../Navbar/Navbar";
import { Typewriter } from "react-simple-typewriter";

import "./Profile.css";

const Profile = () => {
  return (
    <>
      <div className="container   mt-5 mb-4" id="home">
      <div className="row d-flex justify-content-center align-items-center profile-parent">
        <div className="col-md-8 profile-details p-0 text-center">
          {/* <div className="colz">
            <div className="colz-icon">
              <a href="">
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a href="#">
                <i className="fa fa-telegram" />
              </a>
              <a href="https://www.instagram.com/instructor_ehizeex/">
                <i className="fa fa-instagram" />
              </a>
              <a href="https://wa.me/8801625594691">
                <i className="fa fa-whatsapp" />
              </a>
              <a href="https://twitter.com/Ehiedu_baba">
                <i className="fa fa-twitter" />
              </a>
            </div>
          </div> */}
          {/* <h3 className="fw-bold">Welcome</h3> */}
          <div className="profile-details-name">
            <span className="primary-text">
              Hello, I'M <span className="highlighted-text">Billal Farabi</span>
            </span>
          </div>

          <div class="profile-details-role">
            <span class="primary-text">
              {" "}
              <h1>A {" "}
                {/* <Typical
                  loop={Infinity}
                  steps={[
                    "Web Designer",
                    1000,
                    "Front End Developer",
                    1000,
                    "Web Developer",
                    1000,
                    "ReactJS Developer",
                    1000,
                    
                  ]}
                /> */}
                <Typewriter
                  words={[
                    "Front End Developer.",
                    "React Developer.",
                    "Web Designer.",
                  ]}
                  loop={false}
                  cursor
                  // cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                  // onLoopDone={handleDone}
                />
              </h1>
            </span>
            <span class="profile-role-tagline">
              Enthusiastic React developer with broad expertise in JavaScript
              and a willingness to learn and master Back-end Development.
            </span>
          </div>

          <div className="profile-options my-3">
          
          <a href="https://www.linkedin.com/in/billal-farabi/" target="_blank">
          <button className="btn primary-btn px-2 "> Hire Me </button>
          </a>
            
            <a href="https://drive.google.com/file/d/1aSgxNRJbeAe_IL7jFQ1icjyWh1iIH5KI/view" target="_blank">
              <button className="btn highlighted-btn px-2">Get Resume</button>
            </a>
          </div>
        </div>

        <div class="profile-picture col-md-4 m-0 p-0 text-center">
          <div class="profile-picture-head m-0 p-0">
            <img className="w-75" src={require("../../Assets/Home/Billal-passport.jpg")} alt="" />
          </div>
        </div>

        </div>

      </div>
    </>
  );
};

export default Profile;
