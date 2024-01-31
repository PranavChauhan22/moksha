import React from "react";
import "./Footer.css";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";

function Footer() {
  const hang1="https://mokshainnovision.s3.eu-north-1.amazonaws.com/elementsMain/hang_1.png";
  const hang2="https://mokshainnovision.s3.eu-north-1.amazonaws.com/elementsMain/hang_3.png";
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
          <a href="https://x.com/mokshansut?s=11" target={"_blank"}>
            <RiTwitterXFill className="footer_icon" />
          </a>
        </div>
        <a href="mailto:moksha@nsut.ac.in" className="footer_btn">
          Contact Us
        </a>
        {/* <img src={hang2} className="hang1_foot" /> */}

        <a href="mailto:moksha@nsut.ac.in" className="footer_btn">
          <a href="#history" style={{ textDecoration: "none", color: "white" }}>
            History
          </a>
        </a>
        {/* <img src={hang1} className="hang1_foot" /> */}

        <div className="footer_text">
          Netaji Subhas University Of Technology, Azad Hind Fauj Marg, Dwarka
          Sector-3, Dwarka, Delhi, 110078
        </div>
      </div>
    </div>
  );
}

export default Footer;
