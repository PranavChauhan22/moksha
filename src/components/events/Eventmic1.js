import React from 'react'
import "./Eventmic1.css"
function Eventmic1({eventData}) {

  return (
    <div className='event_micro_1'>
      
      <img src={eventData[7]} className="card_e_img" />
      <div className='card_e_txt'>
        {eventData[4]}
      </div>
    </div>
  )
}

export default Eventmic1

