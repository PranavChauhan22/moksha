import React from 'react'
import "./Timeline.css"
import img from "./timeline.png"
import cds from "./SCROLL.gif"
import head from "./timeline_txt.png"
function Timeline() {

  
  return (
    <div className='timeline' id="history">
      <img src={head} className="head_txt"/>
      <img src={cds} className="cds"/>
      <img src={img} className="time_img"/>
    </div>
  )
}

export default Timeline