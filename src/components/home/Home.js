import Spline from '@splinetool/react-spline'
import React from 'react'
import Navbar from '../navbar/Navbar'
import "./Home.css"
import {Zoom} from 'react-awesome-reveal'
import 'animate.css';
import hang1 from "../elements/hang_1.png";
import gr from "./homegif.gif"
import { FaAngleDoubleDown } from "react-icons/fa";
import logo from "./ww_MV.png"


function Home() {
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