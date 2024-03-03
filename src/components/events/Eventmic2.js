import React from 'react'
import "./Eventmic2.css"
function Eventmic2({eventData,val}) {

  if(val==="1"){
  return (
    <div className='event_micro_2'>
      
      <img src={eventData[8]} className="card_e_img" />
      <div className='card_e_txt'>
        {eventData[1]}
      </div>
    </div>
  )
}
else{
  return (
    <div className='event_micro_2'>
      
      <img src={eventData[7]} className="card_e_img" />
      <div className='card_e_txt'>
        {eventData[4]}
      </div>
    </div>
  )
}

}

export default Eventmic2

