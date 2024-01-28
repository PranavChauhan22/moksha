import { jwtDecode } from "jwt-decode";
import React, { useState, useEffect } from "react";
import Modal from "react-modal";


import "./CL.css";
import Footer from "../footer/Footer";
import Loader from "../loader/Loader";
import SignUpModal from "../signup/SignUpModal";

function CL() {
  const ele1 = "https://mokshainnovision.s3.eu-north-1.amazonaws.com/wiacl.png";
  const ele2 = "https://mokshainnovision.s3.eu-north-1.amazonaws.com/elementsCL/2.png";
  const ele3 = "https://mokshainnovision.s3.eu-north-1.amazonaws.com/elementsCL/3.png";
  const ele4 = "https://mokshainnovision.s3.eu-north-1.amazonaws.com/elementsCL/4.png";
  const a_3 = "https://mokshainnovision.s3.eu-north-1.amazonaws.com/elementsCL/a_3.png";
  const a_4 = "https://mokshainnovision.s3.eu-north-1.amazonaws.com/elementsCL/a_4.png";
  const pink="https://mokshainnovision.s3.eu-north-1.amazonaws.com/bgs/pink.png"
  const head="https://mokshainnovision.s3.eu-north-1.amazonaws.com/strips/cl_strip.png"
  const bg="https://mokshainnovision.s3.eu-north-1.amazonaws.com/bgs/cl_bg.png"
  const logo="https://mokshainnovision.s3.eu-north-1.amazonaws.com/mokshalogo.png"

  const [isSignUpModalOpen, setIsSignUpModalOpen] = React.useState(false);

  const [formData, setFormData] = useState({
    college: "",
    collegeState: "",
    collegeCity: "",
    por: "",
    phoneNumber: "",
    age: "",
    gender: "",
    yearOfStudy: "",
    collegeIdDriveLink: "",
    panAadharCardDriveLink: "",
    essay: "",
  });
  const [mvId, setMvId] = useState(null);

  const [loading, setLoading] = useState(false);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [token, setToken] = useState(null);
  const [data, setdata] = useState("Oops, An error occurred");

  const [errorMessage, setErrorMessage] = useState("");

  const getMvid = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      const email = jwtDecode(token).email;
      try {
        const response = await fetch(
          "https://moksha-9bmv.onrender.com/findCL",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email }),
          }
        );

        if (response.ok) {
          // Handle successful submission
          const resp = await response.json();
          if (resp.message !== "0") {
            setMvId(resp.message);
          }
          setLoading(false);

          // Clear form data or redirect to another page
        } else {
          setLoading(false);
        }
      } catch (error) {
        setLoading(false);
      }
    }
  };
  useEffect(() => {
    // Fetch name and email from localStorage
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = jwtDecode(token);
      setFormData({
        ...formData,
        name: decodedToken.name,
        email: decodedToken.email,
      });
      setToken(decodedToken);
    }
    getMvid();
  }, []);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    for (const key in formData) {
      if (formData[key] === "") {
        setdata("Please fill in all the details.");
        setModalIsOpen(true);
        setLoading(false);
        return; // Stop submission if any field is empty
      }
    }

    try {
      const response = await fetch(
        "https://moksha-9bmv.onrender.com/registerAsCl",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        // Handle successful submission
        setdata(
          "Moksha-Innovision captured your interest, will get back to you soon."
        );
        setLoading(false);

        setModalIsOpen(true);
        window.location.reload();
        // Clear form data or redirect to another page
      } else {
        setdata("Oops, An error occurred");
        setLoading(false);
        setModalIsOpen(true);
      }
    } catch (error) {
      setdata("Oops, An error occurred");
      setLoading(false);

      setModalIsOpen(true);
    }
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
  if (loading) {
    return <Loader />;
  } else {
    return (
      <div className="CL">
        <img src={bg} className="cl_bg" />
        <img src={bg} className="cl_bg_1" />
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
            >
              {data}
            </p>
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
        <div className="flex_cl">
          <img src={head} className="cl_head" />
          {mvId ? (
            <div className="approve_cl">
              <div className="mv_id">{mvId}</div>
            </div>
          ) : token==null ? (
            <>
              <div
                className="navbar_ele n3"
                onClick={() => setIsSignUpModalOpen(true)}
                style={{ cursor: "pointer",backgroundColor:"black",padding:"20px" }}
              >
                REGISTER
              </div>
              <SignUpModal
                isOpen={isSignUpModalOpen}
                onClose={() => setIsSignUpModalOpen(false)}
              />
            </>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="cl_form"
              style={mvId && { display: "none" }}
            >
              {/* ... fields for college, collegeState, collegeCity, etc. */}
              <div className="wrap_CL_inputs">
                <input
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  className="cl_txt_ip"
                  placeholder="Name"
                />
                <input
                  type="text"
                  value={formData.email}
                  onChange={handleChange}
                  className="cl_txt_ip"
                  placeholder="Email"
                />
              </div>
              {/* Gender dropdown */}
              <div className="wrap_CL_inputs">
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="cl_txt_dropdown"
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="female">Other</option>
                  {/* Add other gender options as needed */}
                </select>

                {/* Year of study dropdown */}
                <select
                  name="yearOfStudy"
                  value={formData.yearOfStudy}
                  onChange={handleChange}
                  className="cl_txt_dropdown"
                >
                  <option value="">Select Year of Study</option>
                  <option value="first">First Year</option>
                  <option value="second">Second Year</option>
                  <option value="third">Third Year</option>
                  <option value="fourth">Fourth Year</option>
                </select>
              </div>
              <div className="wrap_CL_inputs">
                <input
                  type="text"
                  value={formData.phoneNumber}
                  onChange={(e) =>
                    setFormData({ ...formData, phoneNumber: e.target.value })
                  }
                  className="cl_txt_ip"
                  placeholder="Contact No."
                />

                <input
                  type="text"
                  value={formData.age}
                  onChange={(e) =>
                    setFormData({ ...formData, age: e.target.value })
                  }
                  className="cl_txt_ip"
                  placeholder="Age"
                />
              </div>
              <div className="wrap_CL_inputs">
                <input
                  type="text"
                  value={formData.college}
                  onChange={(e) =>
                    setFormData({ ...formData, college: e.target.value })
                  }
                  className="cl_txt_ip"
                  placeholder="College"
                />

                <input
                  type="text"
                  value={formData.por}
                  onChange={(e) =>
                    setFormData({ ...formData, por: e.target.value })
                  }
                  className="cl_txt_ip"
                  placeholder="POR (Ex: Music Society President)"
                />
              </div>
              <div className="wrap_CL_inputs">
                <input
                  type="text"
                  value={formData.collegeState}
                  onChange={(e) =>
                    setFormData({ ...formData, collegeState: e.target.value })
                  }
                  className="cl_txt_ip"
                  placeholder="College State"
                />

                <input
                  type="text"
                  value={formData.collegeCity}
                  onChange={(e) =>
                    setFormData({ ...formData, collegeCity: e.target.value })
                  }
                  className="cl_txt_ip"
                  placeholder="College City"
                />
              </div>
              <div className="wrap_CL_inputs">
                <input
                  type="text"
                  value={formData.collegeIdDriveLink}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      collegeIdDriveLink: e.target.value,
                    })
                  }
                  className="cl_txt_ip"
                  placeholder="College Id (Drive Link)"
                />

                <input
                  type="text"
                  value={formData.panAadharCardDriveLink}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      panAadharCardDriveLink: e.target.value,
                    })
                  }
                  className="cl_txt_ip"
                  placeholder="Pan/Aadhar Card drive link"
                />
              </div>
              <div className="warning_drive_link">
                ⚠️ Make sure the drive link you are sharing is open for all
              </div>

              <textarea
                value={formData.essay}
                onChange={(e) =>
                  setFormData({ ...formData, essay: e.target.value })
                }
                className="cl_txtarea_ip"
                placeholder="Motivation that drives you to become CL (Max 300 words)"
              />
              {/* ... other fields for drive links, essay, etc. */}

              <button type="submit" className="submit_cl">
                Submit
              </button>
              {errorMessage && (
                <div className="error-message">{errorMessage}</div>
              )}
            </form>
          )}
        </div>
        <img src={pink} className="ping_cl" />
        <div className="cl_eles">
          <img src={ele1} className="cl_ele" />
          <img src={ele2} className="cl_ele" />
        </div>
        <div className="cl_eles">
          <img src={ele3} className="cl_ele" />
          <img src={ele4} className="cl_ele" />
        </div>

        <div className="ad_wrap">
          <img src={a_3} className="a_wr" />
          <img src={a_4} className="a_wr" />
        </div>
        <div style={{ backgroundColor: "#dc79ba", width: "100vw" }}>
          <Footer />
        </div>
      </div>
    );
  }
}
export default CL;
