import React from 'react'
import "./Timeline.css"

function Timeline() {
  const img="https://mokshainnovision.s3.eu-north-1.amazonaws.com/images/timeline.png";
  const cds="https://mokshainnovision.s3.eu-north-1.amazonaws.com/gifs/SCROLL.gif";
  const head="https://mokshainnovision.s3.eu-north-1.amazonaws.com/strips/timeline_txt.png"
  return (
    <div className='timeline' id="history">
      <img src={head} className="head_txt"/>
      <img src={cds} className="cds"/>
      <img src={img} className="time_img"/>
    </div>
  )
}

export default Timeline