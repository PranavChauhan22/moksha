import React from "react";
import "./Accomodation.css";
import acc from "./acc.png";
import i3 from "./3.png";
import i4 from "./4.png";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { IoReturnDownBack } from "react-icons/io5";
import { Link } from "react-router-dom";
import Footer from "../footer/Footer";

function Accomodation() {
  return (
    <div className="acc_M">
      <div className="acc">
      <a href="https://www.mokshansut.com" style={{textDecoration:"none",color:"white"}}>
          <div className="back_btn">
            <IoReturnDownBack className="back_io" />

            <div className="back_txt">
              
              BACK
              
              
              </div>
          </div>
            </a>
        {/* <div className="cloud"></div>
        <div className="cloud1"></div> */}
        <div className="acc_head">
          <div className="acc_p">Accommodations
</div>
          <div className="acc_s">
          Moksha-Innovision’s Team is committed to providing a pleasant and comfortable experience for all the enthusiastic participants opting for accommodations during the festival. Given the extensive participation, we have devised a set of procedural guidelines to ensure a smooth and glitch-free process.  
          </div>
          <a href="https://accommodations.mokshansut.com/" target={"_blank"} style={{textDecoration:"none"}}>

          <div className="acc_l">BOOK NOW!</div>
          </a>
          <div className="acc_p_a">How to avail?</div>
          <div className="acc_s">
            1. Everybody willing to avail accommodation in Moksha-Innovision
            must register here first and then proceed to book now.{" "}
            <br></br><br></br>2. If you are part of your college contingent, then you can register through Contingent Leader (hereafter referred to as ‘CL’) of your college.{" "}
            <br></br><br></br>3. If your college has no CL, you can become one by registering yourself at{" "}
            <a href="https://www.mokshansut.com/cl" target={"_blank"}>
              https://www.mokshansut.com/cl
            </a>{" "}
            <br></br><br></br>4. For more details, refer to FAQ’s at <a href="https://accommodations.mokshansut.com/" target={"_blank"}>
              MV Accommodations
            </a>{" "}
           
          </div>
          <div className="acc_p_a">Contingent Leader</div>
          <div className="acc_s">
          The Contingent Leader (CL) serves as the connection between MV and their college for all accommodation-related queries, ensuring seamless communication among all contingent members. Upon successful completion of their duties, the CL receives a certificate of appreciation from MV, NSUT, Delhi, along with various exciting incentives. Seize the opportunity to receive a 10% discount by booking accommodation for a contingent of 20 or more members all at once!
          <br></br><br></br>
          <a href="https://www.mokshansut.com/cl" target={"_blank"}>
          Click here to become the CL of your college
            </a>{" "}
          </div>
         
          
          
        </div>

        <img src={acc} className="tower" />
      </div>
<div style={{marginTop:"50px"}}>
<div className="heads_acc">
            <div>
              <img src={i3} className="a_wr ii" />
              <div style={{ marginTop: "-20px" }}>
                <a
                  href="https://www.instagram.com/shreyansh0242?igsh=ZGdobzNyemhkYXph"
                  target={"_blank"}
                  style={{ color: "white" }}
                >
                  <FaInstagram
                    style={{ fontSize: "30px", marginRight: "50px" }}
                  />
                </a>
                <a
                  href="https://wa.me/917840051946"
                  target={"_blank"}
                  style={{ color: "white" }}
                >
                  <FaWhatsapp style={{ fontSize: "30px" }} />
                </a>
              </div>
            </div>
            <div>
              <img src={i4} className="a_wr ii" />
              <div style={{ marginTop: "-20px" }}>
                <a
                  href="https://www.instagram.com/nikita_kanodia_/"
                  target={"_blank"}
                  style={{ color: "white" }}
                >
                  <FaInstagram
                    style={{ fontSize: "30px", marginRight: "50px" }}
                  />
                </a>
                <a
                  href="https://wa.me/919599144212"
                  target={"_blank"}
                  style={{ color: "white" }}
                >
                  <FaWhatsapp style={{ fontSize: "30px" }} />
                </a>
              </div>
            </div>
          </div>

      <Footer data={"a"}/>
</div>
    </div>
  );
}

export default Accomodation;
