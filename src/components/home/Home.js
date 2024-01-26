import Spline from '@splinetool/react-spline'
import React from 'react'
import Navbar from '../navbar/Navbar'
import "./Home.css"

import 'animate.css';
import { FaAngleDoubleDown } from "react-icons/fa";


function Home() {
  const gr="https://mokshainnovision.s3.eu-north-1.amazonaws.com/homegif.gif";
  const logo="https://mokshainnovision.s3.eu-north-1.amazonaws.com/ww_MV.png";

  return (
    <div className='home'>
        <div className='MI_home'>
{/*  
        <div className='animate__animated animate__zoomInLeft'>MOKSHA-INNOVISION</div>
        <div className='MI_home_text_2'>2024</div> */}
        <img src={logo} className="home_logo_a"/>
        <a href="#about" style={{textDecoration:"none",color:"white",margin:"auto"}}>

        <FaAngleDoubleDown style={{margin:"auto",fontSize:"40px",marginTop:"-20px"}}/>
        </a>
        </div>
        
        {/* <Spline scene="https://prod.spline.design/3xK-AD2pqBQtHu8m/scene.splinecode" 
    style={{height:"100vh",zIndex:"-10"}}/> */}
    <img src={gr} className="gr"/>
    {/* <div style={{height:"100vh",zIndex:"-10",backgroundColor:"#150a28"}}>a</div> */}
    </div>
  )
}

export default Home