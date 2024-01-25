import React from "react";
import "./Footer.css";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import hang1 from "../elements/hang_1.png";
import hang2 from "../elements/hang_3.png";
function Footer() {
  return (
    <div className="footerbg" id="footer">
      <div className="footer">
        <div>
          <a href="https://www.instagram.com/mokshansut/" target={"_blank"}>
            <FaInstagram className="footer_icon" />
          </a>
          <a href="https://www.facebook.com/mokshansut/" target={"_blank"}>
            <FaFacebook className="footer_icon" />
          </a>
        </div>
        <img src={hang1} className="hang1_foot" />
        <a href="mailto:moksha@nsut.ac.in" className="footer_btn">
          Contact Us
        </a>
        <img src={hang2} className="hang1_foot" />

        <a href="mailto:moksha@nsut.ac.in" className="footer_btn">
          <a href="#history" style={{ textDecoration: "none", color: "white" }}>
            History
          </a>
        </a>
        <div className="footer_text">
          Netaji Subhas University Of Technology, Azad Hind Fauj Marg, Dwarka
          Sector-3, Dwarka, Delhi, 110078
        </div>
      </div>
    </div>
  );
}

export default Footer;
