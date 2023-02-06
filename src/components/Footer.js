import React from "react";
import "./FooterStyles.css";
import { FaFacebook, FaLinkedin, FaMailBulk, FaPhone, FaSearchLocation, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaSearchLocation size={20} style={{ color: "#ffffff", marginRight: "2rem" }} />
            <div>
              <p>123 Adios St.</p>
              <h4>Lemao, ID</h4>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone size={20} style={{ color: "#ffffff", marginRight: "2rem" }} />
              08969696969
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk size={20} style={{ color: "#ffffff", marginRight: "2rem" }} />
              lemao69@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About the company</h4>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?</p>
          <div className="social">
            <FaFacebook size={20} style={{ color: "#ffffff", marginRight: "1rem" }} />
            <FaTwitter size={20} style={{ color: "#ffffff", marginRight: "1rem" }} />
            <FaLinkedin size={20} style={{ color: "#ffffff", marginRight: "1rem" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
