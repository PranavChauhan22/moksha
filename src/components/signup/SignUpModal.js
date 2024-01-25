// SignUpModal.js

import { GoogleLogin } from "@react-oauth/google";
import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";

import "./signup.css";
import logo from "../images/mokshalogo.png"
import axios from "axios";
import Loader from "../loader/Loader";

const SignUpModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState([]);
  const [profile, setProfile] = useState([]);

  

  const sendDataToBackend = async (name, email, password) => {
    setLoading(true);
    try {
      // Make a POST request to your Node.js server
      const response = await axios.post("https://moksha-9bmv.onrender.com/signup", {
        name,
        email,
        password,
      });
      localStorage.setItem("token",response.data.token);
      setLoading(false);
      window.location.reload();


    } catch (error) {
        setLoading(false);
        setModalIsOpen(true);
    }
  };

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });

  useEffect(() => {
    if (user) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          //send data to backend
          sendDataToBackend(res.data.name, res.data.email, "");
          
        })
        .catch((err) => 
        // setModalIsOpen(true)
        <></>
        );
    }
  }, [user]);

  // log out function to log the user out of google and set the profile array to null

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSignUp = async () => {
    // Email validation
    const isValidEmail = email.includes("@");
    setIsEmailValid(isValidEmail);

    // Password validation (8 characters and contains special characters)
    const isPasswordValid =
      password.length >= 8 && /[!@#$%^&*(),.?":{}|<>]/.test(password);
    setIsPasswordValid(isPasswordValid);

    if (isValidEmail && isPasswordValid) {
      sendDataToBackend(username, email, password);
      
    }
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor:"transparent",
      border:"transparent"
    },
  };

  if(loading){
    return <Loader/>
  }else{
  return (
    <Modal
    isOpen={isOpen}
    onRequestClose={onClose}
    contentLabel="Signup Modal"
    
    style={customStyles}
    >

    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Signup Modal"
        style={customStyles}
      >
        <div style={{backgroundColor:"black",height:"220px"}}>
          <img src={logo} alt="Moksha-Innovision 2024" style={{height:"100px"}} />
          <p style={{color:"white",textAlign:"center",fontWeight:"bolder"}}>Oops, An error occurred</p>
          <div onClick={closeModal} style={{border:"1px solid white",width:"60px",padding:"10px",color:"white",margin:"auto",textAlign:"center",fontWeight:"bolder",marginBottom:"20px",cursor:"pointer"}}>Close</div>
          {/* Add more content as needed */}
        </div>
      </Modal>

      <div className="register">
        <input
          type="text"
          value={email}
          onChange={handleEmailChange}
          className="email"
          placeholder="Email"
        />
        {!isEmailValid && <p className="error-register">Please enter a valid email address.</p>}

        <input
          type="password"
          value={password}
          className="password"
          onChange={handlePasswordChange}
          placeholder="Password"
        />
        {!isPasswordValid && (
          <p className="error-register">
            Password must be at least 8 characters long and contain at least one
            special character.
          </p>
        )}

        <input
          type="text"
          value={username}
          onChange={handleUsernameChange}
          className="username"
          placeholder="Username"
        />

        <button onClick={handleSignUp} className="signup_btn">
          Sign Up
        </button>
        <div style={{ fontWeight: "bolder",margin:"auto" }}>OR</div>
        <button onClick={() => login()} className="google_signin">
          Sign in with Google{" "}
        </button>
      </div>

      <div></div>
    </div>
    </Modal>

  );
};
}

export default SignUpModal;
