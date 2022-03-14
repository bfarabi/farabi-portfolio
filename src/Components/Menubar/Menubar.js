import React, { useState } from "react";
// import "./Menubar.css";


const Menubar = () => {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };
  let prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-80px";
      document.getElementById("navbar").style.transition = "1s";
    }
    prevScrollpos = currentScrollPos;
  };
  return (
    <div>
      <div className="navigationMenu" id="navbar">
        <nav className="navbar ">
          <a to="/" className="navbar-logo" onClick={closeMobileMenu}>
            {/* <img src={logo} alt="" /> */}
            <h3>Billal Farabi</h3>
          </a>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu "}>
            <li
              className="nav-item"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <a to="/about" className="nav-links" onClick={closeMobileMenu}>
                About
              </a>
            </li>

            <li className="nav-item">
              <a
                to="/prjectDetails"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Project
              </a>
            </li>
            {dropdown}

            <li className="nav-item">
              <a
                to="/contactus"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Contact
              </a>
            </li>

            <li className="hero_icon">
              <button>
                <a
                  className="p-0 m-0"
                  target="-blank"
                  href="https://drive.google.com/file/d/1_XgaUTdGZ8lMlp_4LtrNrDf0sQ1Lrj-H/view?usp=sharing"
                  download
                >
                  DOWNLOAD RESUME
                </a>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Menubar;