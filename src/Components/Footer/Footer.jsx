import React from "react";
import "./Footer.css";
import Github from "../../assets/github.png";
import instagram from "../../assets/instagram.png";
import LinkedIn from "../../assets/linkedin.png";
import logo from "../../assets/logo.png";
const Footer = () => {
  return (
    <div className="footer-container">
      <hr />
      <div className="footer">
        
        <div className="social-links">
        <img src={Github} alt="" />
        <img src={instagram} alt="" />
        <img src={LinkedIn} alt="" />
        </div>

        <div className="logo-f">
          <img src={logo} alt="" />
        </div>
      </div>
      <div className="blur blur-footer1"></div>
      <div className="blur blur-footer2"></div>
    </div>
  );
};

export default Footer;
