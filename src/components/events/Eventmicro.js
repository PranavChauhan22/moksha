import React from 'react'
import "./Eventmicro.css"

function Eventmicro({eventData}) {

  // width: 215px;
  // padding-top: 70px;
  // position: relative; /* Ensure proper stacking context */
  // z-index: 5; /* Lower than the background to appear below it */

  return (
    <div className='event_micro'>


      <img src={eventData[7]} className="card_e_img" />
     
      <div className='card_e_txt'>
        {eventData[4]}
      </div>
    </div>
  )
}

export default Eventmicro

