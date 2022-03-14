import React from "react";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div className="bg-light">
    <div className="container  py-4" id="about">
      <div className="row text-center ">
        <div>
          <h1 className="font-weight-bold">ABOUT ME</h1>
          <div className="heading-seperator">
            <div className="seperator-line" />
            <div className="seperator-blob">
              <div />
            </div>
          </div>
        </div>
      </div>
      <div className="row py-3">
        <div className="about-me-card ">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-6 bg-white">
              <div className="about-me-profile w-100 text-center ">
                <img
                  className="w-50"
                  src={require("../../Assets/Home/about-billal.jpg")}
                  alt=""
                />
              </div>
            </div>

            <div className="about-me-details text-justify py-3 col-md-6">
              <span className=" about-me-description  ">
                <span className="first-word">A self-motivated</span> and
                passionate front end developer with a deep interest in software
                development world.I have also primary knowledge about backend.{" "}
                <br />
                A passionate learner of new technologies and solving any
                problems using google, youtube and other sources. Also I love to
                teach and share knowledge to everyone. I am easy to communicate
                with and good with teamwork. <br />
                Seeking a challenging yet rewarding career with a progressive
                company that provides the opportunity for development while
                making a significant contribution to the growth of the company.
              </span>
              <div className="highlight ">
                <div className="highlight-blob" />
                <p className="m-0">
                  Studying B.Sc honors at Kabi Nazrul govt college, affiliated
                  university of Dhaka.{" "}
                </p>
              </div>
              <div className="highlight align-items-center ">
              <span class="iconify text-danger ms-0 me-2" data-icon="topcoat:location" data-width="30"></span>
                <p className="m-0">
                  Dhaka, Bangladesh.
                </p>
              </div>
              {/* <div className="about-me-highlights">
                <div className="highlight-heading">
                  <span>Here are a Few Highlights:</span>
                </div>
                <div className="highlight">
                  <div className="highlight-blob" />
                  <span>Full Stack web and mobile development</span>
                </div>
                <div className="highlight">
                  <div className="highlight-blob" />
                  <span>Interactive Front End as per the design</span>
                </div>
                <div className="highlight">
                  <div className="highlight-blob" />
                  <span>React and React Native</span>
                </div>
                <div className="highlight">
                  <div className="highlight-blob" />
                  <span>Redux for State Mnanagement</span>
                </div>
                <div className="highlight">
                  <div className="highlight-blob" />
                  <span>Building REST API</span>
                </div>
                
              </div> */}

              <div className="about-me-options">
                <a
                  href="https://www.linkedin.com/in/billal-farabi/"
                  target="_blank"
                >
                  <img src="https://img.icons8.com/fluency/48/000000/linkedin-circled.png" />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=100010115470469"
                  target="_blank"
                >
                  <img src="https://img.icons8.com/fluency/48/000000/facebook-new.png" />
                </a>
                <a href="https://github.com/bfarabi" target="_blank">
                  <img src="https://img.icons8.com/glyph-neue/64/000000/github.png" />
                </a>

                <br />
                <div className="py-2">
                  <a
                    href="https://www.linkedin.com/in/billal-farabi/"
                    target="_blank"
                  >
                    <button className="btn primary-btn px-2 p-2">
                      {" "}
                      Hire Me{" "}
                    </button>
                  </a>
                  <a
                    href="https://drive.google.com/file/d/1aSgxNRJbeAe_IL7jFQ1icjyWh1iIH5KI/view"
                    target="_blank"
                  >
                    <button className="btn highlighted-btn px-2 p-2">
                      Get Resume
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AboutMe;
