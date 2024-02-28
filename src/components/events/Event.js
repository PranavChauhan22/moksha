import React, { useState, useEffect } from "react";
import "../events/Event.css";
import queryString from "query-string";
import Modal from "react-modal";
import SignUpModal from "../signup/SignUpModal";

import { encode, decode } from "string-encode-decode";
import { jwtDecode } from "jwt-decode";
import Loader from "../loader/Loader";
import mokshalogo from "./mokshalogo.png"
function Event() {
  const logo =
    mokshalogo;
  const [TOKEN, setTOKEN] = useState(null);
  const [eventData, setEventData] = useState(null);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = React.useState(false);
  const [loading, setLoading] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function formatText(content) {
    const sections = content.split(/(?=\$+\d{1,2}\)|(?<!\$)\d{1,2}\)|(?<!\$)\d{1,2}\.\s*\$\$)/);
  
    return (
      <div>
        {sections.map((section, index) => (
          <div key={index}>
            {/* Formatting each section */}
            {section.split(/\$\$|\$/).map((item, idx) => {
              // Check if the item is not an empty string
              if (item.trim() !== '') {
                return <p key={idx}>{item.trim()}</p>;
              } else {
                return null;
              }
            })}
          </div>
        ))}
      </div>
    );
  };
  

  
  
  

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "transparent",
      border: "transparent",
    },
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };
  const getMvid = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      const email = jwtDecode(token).email;
      setTOKEN(email);
    }
  };

  const [result, setResult] = useState(null);

  const checkUserEvent = async (userEmail, eventToCheck) => {
    try {
      const response = await fetch("https://moksha-9bmv.onrender.com/checkUserEvent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userEmail, eventToCheck }),
      });

      const data = await response.json();

      setResult(data.message);
    } catch (error) {
      console.error("Error fetching data:", error);
      setResult("An error occurred");
    }
  };

  useEffect(() => {
    // Assuming you are using react-router-dom for routing
    const { search } = window.location;
    const params = queryString.parse(search);

    if (params.UIMV) {
      const myArray = JSON.parse(params.UIMV);
      const decodedArray = myArray.map((item) => decode(item));
      console.log(decodedArray);
      setEventData(decodedArray);
      // Now you have your array in the component state or can use it as needed.
    }

    getMvid();
  }, []);
  useEffect(() => {

    if (TOKEN && eventData) {
      checkUserEvent(TOKEN, eventData[4]);
    }
  }, [eventData, TOKEN]);

  const [rr, setrr] = useState(false);
  const [formData, setFormData] = useState({});

  const [form, setform] = useState(true);

  const handleInputChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleSubmit = async (e) => {
    
    e.preventDefault();
    setLoading(true);
    // formData.append("id",TOKEN);

    try {
      // Send form data to the Node.js server using the fetch API
      // const response = await fetch("http://localhost:3002/registerEvents", {
      const response = await fetch("https://moksha-9bmv.onrender.com/registerEvents", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: formData,
          event: eventData[4],
          id: TOKEN,
        }),
      });

      // Handle the response from the server
      if (response.ok) {
        console.log("Form submitted successfully!");
        window.location.reload();
        // Optionally reset the form or perform other actions
      } else {
        console.error("Form submission failed.");
        window.location.reload();

      }
    } catch (error) {
      console.error("Error submitting form:", error);
      window.location.reload();
    }
  };
  const toggleFAQ = () => {
    setrr((e) => !e);
  };
  const toggleForm = () => {
    setform((e) => !e);
  };

  const CcustomStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor:"transparent",
      border:"transparent",
    },
  };

  if ((eventData === null && result === null)||( loading)) {
    return <Loader/>
  }  else {
    const formFields = eventData[12].split(",").map((field, index) => {
      // Check if the field ends with an asterisk
      const isCompulsory = field.trim().endsWith("*");
    
      return (
        <div key={index} className="event-form">
          <label htmlFor={field} className="event-label">
            {field}
          </label>
          <input
            type="text"
            id={field}
            name={field}
            className="event-ip"
            required={isCompulsory} // Set required based on whether field ends with '*'
            onChange={(e) => handleInputChange(field, e.target.value)}
          />
        </div>
      );
    });
    
    return (
      <div className="middle-box">
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Signup Modal"
          style={customStyles}
        >
          <div
            style={{
              backgroundColor: "black",
              height: "220px",
              padding: "10px",
            }}
          >
            <img
              src={logo}
              alt="Moksha-Innovision 2024"
              style={{ height: "100px" }}
            />
            <p
              style={{
                color: "white",
                textAlign: "center",
                fontWeight: "bolder",
                width: "200px",
                margin: "auto",
              }}
            ></p>
            <div
              onClick={closeModal}
              style={{
                border: "1px solid white",
                width: "60px",
                padding: "10px",
                color: "white",
                margin: "auto",
                textAlign: "center",
                fontWeight: "bolder",
                marginBottom: "20px",
                cursor: "pointer",
                marginTop: "20px",
              }}
            >
              Close
            </div>
            {/* Add more content as needed */}
          </div>
        </Modal>

        <div className="events_slip">{eventData[5]}</div>

        <div className="event-box">
          <img src={eventData[7]} className="event_img" />
        </div>
        <div className="event-h">
          {eventData[4]} presented by {eventData[1]} in Moksha - Innovision 2024
        </div>
        <div className="eventsl">
          <div className={"eventl " + (rr ? "open" : "")} key={"1"}>
            <div className="event-question" onClick={() => toggleFAQ()}>
              {" "}
              Rules & Regulations
            </div>
            <div className="event-answer">
              
              {formatText(eventData[6])}

              
            </div>
          </div>
        </div>

        <div className="event-b">
          For queries, contact: {eventData[8]} at {eventData[9]} or{" "}
          {eventData[10]} at {eventData[11]}
        </div>

        <div className="form-container"></div>
        <div className="eventsl" style={{ marginTop: "30px" }}>
          <div className={"eventl " + (form ? "open" : "")} key={"1"}>
            <div className="event-question" onClick={() => toggleForm()}>
              Register Now
            </div>
            <div className="event-answer">
              {TOKEN ? (
                <>
                  {result === "no" ? (
                    <form className="event-form-f" onSubmit={handleSubmit}>
                      {formFields}
                      <button type="submit" className="event-submit">
                        Submit
                      </button>
                    </form>
                  ) : (
                    <div>You have already registered for the event!</div>
                  )}
                </>
              ) : (
                <>
                  <div
                    className="navbar_ele n3"
                    onClick={() => setIsSignUpModalOpen(true)}
                    style={{
                      cursor: "pointer",
                      backgroundColor: "black",
                      padding: "20px",
                      width: "120px",
                      textAlign: "center",
                      margin: "auto",
                    }}
                  >
                    SIGN-UP
                  </div>

                  <SignUpModal
                    isOpen={isSignUpModalOpen}
                    onClose={() => setIsSignUpModalOpen(false)}
                  />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Event;
