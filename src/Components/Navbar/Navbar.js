import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [show, setShow] = useState(false);
  function showSwitch() {
    return setShow(!show);
  }

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
    <div className="navbar" id="navbar">
      <div className="logo text-light px-2 rounded">
        <p className="logo-text mb-0">Billal Farabi</p>
      </div>
      <div className={show ? "links active" : "links"}>
        <a onClick={() => showSwitch()} href="/#home">
          Home
        </a>
        
        <a href="/#about">About</a>
        <a href="/#skill">Skill</a>
        <a href="/#projects">Projects</a>
        <a href="/#contact">Contact</a>
        <a style={{background: "orangered",
    borderRadius: "10px", fontSize:'1rem',borderBottom:'0'}} href="#"> <i class="bi bi-download"></i> Download CV</a>
      </div>
      <div
        onClick={() => showSwitch()}
        className={show ? "bars-button active mt-4" : "bars-button"}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Navbar;
