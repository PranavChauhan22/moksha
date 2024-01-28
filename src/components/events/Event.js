import React from 'react'
import '../events/Event.css';
function Event() {
    const data=[
        'utkarsh.tripathy.ug21@nsut.ac.in',
        'SHAKESJEER',
        'shakesjeer.nsutd@gmail.com',
        'MOKSHA',
        'COMEDY HUNT',
        'The Stand Up Competition',
        '1) Team Size: Solo\n' +
          '2) Judging Criteria: Content, Quality of humor, 3) Stage presence, Audience engagement, \n' +
          '     Clarity of thought, Wackiness, USP (Unique \n' +
          '      selling point)\n' +
          '4)General Rules-\n' +
          '  Mono -acting, puppetry, musicals are not \n' +
          '  allowed though ventriloquism is allowed.\n' +
          '  Use of props is allowed, brought in by the \n' +
          '  participant himself. The organizers hold the \n' +
          '  discretion of allowing it on stage.\n' +
          '  Both English and Hindi are allowed. However \n' +
          '  short sub passages in other regional \n' +
          '  languages are allowed.\n' +
          '  Decisions taken by the judge are absolute and \n' +
          '  binding.\n' +
          '  Use of obscenity/profanity (at the discretion \n' +
          '  of the judges) is not allowed and there should \n' +
          '  be no direct implications.\n' +
          '  Any Form of music is not allowed during the \n' +
          '  performance.\n' +
          '  Since the participants are called upon in a \n' +
          '  random order, everyone is required to be \n' +
          '  present at least 5 minutes prior to the start.\n' +
          '  Organizers will not be responsible if you are \n' +
          '  unable to show up on time and miss your slot.\n' +
          '\n' +
          '\n' +
          'Preliminary Round-\n' +
          '  Time limit : 5 minutes\n' +
          '  Participants have to submit the drive link of \n' +
          '  the video before the given deadline.\n' +
          '\n' +
          '\n' +
          'Final Round-\n' +
          '  Time limit : 5-7 min',
        'https://drive.google.com/uc?export=view&id=1Z5aQFkG0MHuqYnMFhNDdz7xg2zEAQQOl',
        'Vidhi',
        '8882969954',
        'Utkarsh',
        '9810366025',
        'Name of the College, Participant Name, Contact No., Email-ID, Prelims video submission (drive link)'
      ]
  return (
    <div className="middle-box">
         <div className="event-box">
         <img src={"https://drive.google.com/uc?export=view&id=1Z5aQFkG0MHuqYnMFhNDdz7xg2zEAQQOl"} className="event_img" alt="Event Image" />

         </div>
    </div>
  )
}

export default Event