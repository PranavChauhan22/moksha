// About.js
import React from "react";
import "./About.css";
import img1 from "./imgs/1.png"
import img2 from "./imgs/2.png"
import img3 from "./imgs/3.png"
import img4 from "./imgs/4.png"
import img5 from "./imgs/5.png"
import img6 from "./imgs/6.png"
import img7 from "./imgs/7.png"
import img8 from "./imgs/8.png"
import img9 from "./imgs/9.png"
import hang2 from "./imgs/hang_2.png"
import MO from "./imgs/MO.png"

import { useWindowWidth } from "@react-hook/window-size";
function About() {

  
  const onlywidth = useWindowWidth();
  return (
    <div className="about" id="about">
      <div className="about_head">
        {[img1, img2, img3, img4, img5, img6, img7, img8, img9].map(
          (imgSrc, index) => (
            <img
              key={index}
              src={imgSrc}
              className={`elements_popin ${
                index < 4
                  ? "animate__animated animate__fadeInLeft"
                  : "animate__animated animate__fadeInRight"
              }`}
              alt={`Element ${index + 1}`}
              style={{ height: onlywidth / 7.8, minHeight: "100px" }}
            />
          )
        )}
      </div>
      <div className="hangings">
        {/* <img src={hang1} className="hanging_1"/> */}
        <img src={hang2} className="hanging_2" style={{opacity:"20%"}} />
      </div>
      <div className="img_content_wrap">
        <a href="https://drive.google.com/file/d/12GlD3dHvBSSrqu7wjrsTOYbq1WsvJBx6/view?usp=sharing" target={"_blank"}>

        <img src={MO} className="MO" />
        </a>
        <div className="content_MO">
          <div className="content_head1_MO">MOKSHA's <span style={{color:"#fb63ea"}}>DREAM</span></div>
          <div className="content_body1_MO">
          Moksha is a vibrant festival where creativity steals the spotlight, and liberty is the headline act! It’s the celebration of talent, freedom of speech, and expression that goes beyond the mundane festival experience. Tailored for enthusiasts of artistry and culture, Moksha boasts a diverse array of events such as Theatre Con, Rouge, Battle of Bands, Oorja, Step Up, and many more.
          </div>
          <div className="content_head2_MO">INNO's <span style={{color:"yellow"}}>VISION</span></div>
          <div className="content_body2_MO">
          Innovision is a place where innovation is the heartbeat of the game. It's not your average tech fest; it's a mind-bending spectacle where the greatest student minds come to flaunt their brilliance in hackathons, coding showdowns, ideation bootcamps, and more. Join us in this epic game of wit, where the objective isn't just to flaunt brilliance but to debug, compile, and make innovation a living, breathing reality. So, gear up, debug your excitement, and fasten your seatbelts because Innovision isn't just a tech-fest; it's where algorithms dance, ideas sing, and innovation is not just a heartbeat but a binary code that brings dreams to life!
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
