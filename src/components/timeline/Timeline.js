import React from 'react'
import "./Timeline.css"
import img from "./images/timeline.png"
import head from "./strips/timeline_txt.png"
import cds from "./gifs/SCROLL.gif"
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