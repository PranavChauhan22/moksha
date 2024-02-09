import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { useWindowWidth } from "@react-hook/window-size";
import SignUpModal from "../signup/SignUpModal";
import { jwtDecode } from "jwt-decode";
import { Link } from "react-router-dom";

import "primereact/resources/themes/lara-light-cyan/theme.css";
import PopupDoc from "./Nav";

function Navbar() {
  const onlyWidth = useWindowWidth();
  const [name, setname] = useState(null);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = React.useState(false);

  const openSignUpModal = () => {
    setIsSignUpModalOpen(true);
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const data = jwtDecode(token);
      setname(data.name);
    }
  }, []);

  return (
    onlyWidth>=1000?<div className="navbar">

        <div className="navbar_ele n1">
          <a href="#history" style={{ textDecoration: "none", color: "white" }}>
            HISTORY
          </a>
        </div>
      
   
        <div className="navbar_ele n2" style={{ left: onlyWidth / 2.5 }}>
          <a href="#footer" style={{ textDecoration: "none", color: "white" }}>
            CONTACT
          </a>
        </div>
      


        <div className="navbar_ele n2" style={{ left: onlyWidth / 2.5 }}>
          <Link to="/events" style={{ textDecoration: "none", color: "white" }}>
            EVENTS
          </Link>
        </div>
      
      <div className="navbar_ele n2" style={{ left: onlyWidth / 2.5 }}>
        <Link to="/cl" style={{ textDecoration: "none", color: "white" }}>
          Contingent Leader
        </Link>
      </div>

      <div className="navbar_ele n2" style={{ left: onlyWidth / 2.5 }}>
        <a
          href="https://nsut.store/"
          target={"_blank"}
          style={{ textDecoration: "none", color: "white" }}
        >
          MERCHANDISE
        </a>
      </div>
      {!name ? (
        <div
          className="navbar_ele n3"
          onClick={() => setIsSignUpModalOpen(true)}
          style={{ cursor: "pointer" }}
        >
          REGISTER
        </div>
      ) : (
        <div className="welcome_user">Welcome, {name}</div>
      )}

      <SignUpModal
        isOpen={isSignUpModalOpen}
        onClose={() => setIsSignUpModalOpen(false)}
      />
    </div>:<PopupDoc/>
  );
}

export default Navbar;
