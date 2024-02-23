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
          <div className="acc_p">ACCOMMODATIONS AT MOKSHA-INNOVISION
</div>
          <div className="acc_s">
             Welcome to
            Moksha-Innovision, NSUT's legendary cultural and technical
            festival, now celebrating its 22nd edition! India's premier college
            cultural and technical extravaganza. Organized by students and the
            D.S.W. office, Moksha-Innovison promises an unparalleled experience
            amidst the vibrant campus of NSUT At Moksha-Innovision, we
            prioritize the user experience above all else, ensuring that every
            guest leaves with unforgettable memories. With our commitment to
            excellence, we spare no effort to provide you with the best three
            days of your life. We cordially invite you to join us at
            Moksha-Innovision 2024 for an unforgettable experience.
          </div>
          <a href="https://accommodations.mokshansut.com/" target={"_blank"} style={{textDecoration:"none"}}>

          <div className="acc_l">BOOK NOW!</div>
          </a>
          <div className="acc_p_a">Contingent Leader</div>
          <div className="acc_s">
            Join us as a Contingent Leader (CL) and be the link between your
            college and Moksha-Innovision (MV) at N.S.U.T., Delhi. As a CL,
            you'll be the go-to person for all accommodation queries, ensuring
            seamless communication between MV and your college community. Earn a
            certificate of appreciation from MV, N.S.U.T., Delhi, upon
            successful completion of your duties, along with various exciting
            incentives. Don't miss this opportunity to become a vital link in
            one of India's most prestigious cultural festivals!
          </div>
          <div className="acc_p_b">Instructions</div>
          <div className="acc_s">
          Moksha-Innovision’s Accommodation Team is committed to providing a pleasant and comfortable experience for all the enthusiastic participants opting for accommodations during the festival. Given the extensive participation, we have devised a set of procedural guidelines to ensure a smooth and glitch-free process.  
          </div>
          <div className="acc_p_a">How to avail?</div>
          <div className="acc_s">
            1. Everybody willing to avail accommodation in Moksha-Innovision
            must register here first and then proceed to further steps.{" "}
            <br></br><br></br>2. If you are part of your college contingent, then you can register through Contingent Leader (hereafter referred to as ‘CL’) of your college.{" "}
            <br></br><br></br>3. If your college has no CL, you can become one by registering yourself at{" "}
            <a href="https://www.mokshansut.com/cl" target={"_blank"}>
              https://www.mokshansut.com/cl
            </a>{" "}
            <br></br><br></br>4. For more details, refer to FAQ’s at <a href="https://accommodations.mokshansut.com/" target={"_blank"}>
              MV Accommodations
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
