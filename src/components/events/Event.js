import React, { useState } from "react";
import "../events/Event.css";
function Event() {
  const [rr, setrr] = useState(false);
  const [formData, setFormData] = useState({});

  const [form, setform] = useState(true);
  const data = [
    "utkarsh.tripathy.ug21@nsut.ac.in",
    "SHAKESJEER",
    "shakesjeer.nsutd@gmail.com",
    "MOKSHA",
    "COMEDY HUNT",
    "The Stand Up Competition",
    "1) Team Size: Solo\n" +
      "2) Judging Criteria: Content, Quality of humor, 3) Stage presence, Audience engagement, \n" +
      "     Clarity of thought, Wackiness, USP (Unique \n" +
      "      selling point)\n" +
      "4)General Rules-\n" +
      "  Mono -acting, puppetry, musicals are not \n" +
      "  allowed though ventriloquism is allowed.\n" +
      "  Use of props is allowed, brought in by the \n" +
      "  participant himself. The organizers hold the \n" +
      "  discretion of allowing it on stage.\n" +
      "  Both English and Hindi are allowed. However \n" +
      "  short sub passages in other regional \n" +
      "  languages are allowed.\n" +
      "  Decisions taken by the judge are absolute and \n" +
      "  binding.\n" +
      "  Use of obscenity/profanity (at the discretion \n" +
      "  of the judges) is not allowed and there should \n" +
      "  be no direct implications.\n" +
      "  Any Form of music is not allowed during the \n" +
      "  performance.\n" +
      "  Since the participants are called upon in a \n" +
      "  random order, everyone is required to be \n" +
      "  present at least 5 minutes prior to the start.\n" +
      "  Organizers will not be responsible if you are \n" +
      "  unable to show up on time and miss your slot.\n" +
      "\n" +
      "\n" +
      "Preliminary Round-\n" +
      "  Time limit : 5 minutes\n" +
      "  Participants have to submit the drive link of \n" +
      "  the video before the given deadline.\n" +
      "\n" +
      "\n" +
      "Final Round-\n" +
      "  Time limit : 5-7 min",
    "https://drive.google.com/thumbnail?id=1Z5aQFkG0MHuqYnMFhNDdz7xg2zEAQQOl",
    "Vidhi", 
    "8882969954",
    "Utkarsh",
    "9810366025",
    "Name of the College, Participant Name, Contact No., Email-ID*, Prelims video submission (drive link)",
  ];

  const handleInputChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send form data to the Node.js server using the fetch API
      const response = await fetch("http://your-nodejs-server-endpoint", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // Handle the response from the server
      if (response.ok) {
        console.log("Form submitted successfully!");
        // Optionally reset the form or perform other actions
      } else {
        console.error("Form submission failed.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  const toggleFAQ = () => {
    setrr((e) => !e);
  };
  const toggleForm = () => {
    setform((e) => !e);
  };
  const formFields = data[12].split(", ").map((field, index) => (
    <div key={index} className="event-form">
      <label htmlFor={field} className="event-label">
        {field}
      </label>
      <input
        type="text"
        id={field}
        name={field}
        className="event-ip"
        required={!field.endsWith("*")}
        onChange={(e) => handleInputChange(field, e.target.value)}
      />
    </div>
  ));

  return (
    <div className="middle-box">
      <div className="events_slip">EVENTS</div>
      
      <div className="event-box">
        <img
          src={
            "https://mokshainnovision.s3.eu-north-1.amazonaws.com/events/17DAOX9tm6Ero7d2InuZ1UjMuHVqlM5OF.png"
          }
          className="event_img"
        />
      </div>
      <div className="event-h">
        {data[4]} presented by {data[1]} in Moksha - Innovision 2024
      </div>
      <div className="events">
        <div
          className={"event " + (rr ? "open" : "")}
          key={"1"}

        >
          <div className="event-question" onClick={() => toggleFAQ()}> Rules & Regulations</div>
          <div className="event-answer"><pre>{data[6]}</pre></div>
        </div>
      </div>

      <div className="event-b">
        For queries, contact: {data[8]} at {data[9]} or {data[10]} at {data[11]}
      </div>

      <div className="form-container">
      
      </div>
      <div className="events" style={{marginTop:"30px"}}>
        <div
          className={"event " + (form ? "open" : "")}
          key={"1"}
          
        >
          <div className="event-question" onClick={() => toggleForm()}>Register Now</div>
          <div className="event-answer">
          <form className="event-form-f" onSubmit={handleSubmit}>
              {formFields}
              <button type="submit" className="event-submit">Submit</button>
            </form>
          </div>
        </div>
 
      </div>
      
    </div>
  );
}

export default Event;
