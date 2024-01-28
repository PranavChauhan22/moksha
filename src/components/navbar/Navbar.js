import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { useWindowWidth } from "@react-hook/window-size";
import SignUpModal from "../signup/SignUpModal";
import { jwtDecode } from "jwt-decode";
import { Link } from "react-router-dom";

import "primereact/resources/themes/lara-light-cyan/theme.css";

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
    <div className="navbar">
            {onlyWidth >= 900 && (

      <div className="navbar_ele n1">
        <a href="#history" style={{ textDecoration: "none", color: "white" }}>
          HISTORY
        </a>
      </div>
      )}
      {onlyWidth >= 900 && (
        <div className="navbar_ele n2" style={{ left: onlyWidth / 2.5 }}>
          <a href="#footer" style={{ textDecoration: "none", color: "white" }}>
            CONTACT
          </a>
        </div>
      )}
      
      {onlyWidth >= 900 && (
        <div className="navbar_ele n2" style={{ left: onlyWidth / 2.5 }}>
          <Link to="/cs" style={{ textDecoration: "none", color: "white" }}>
            EVENTS
          </Link>
        </div>
      )}
        <div className="navbar_ele n2" style={{ left: onlyWidth / 2.5 }}>
          <Link to="/cl" style={{ textDecoration: "none", color: "white" }}>
            CL
          </Link>
        </div>
      
      <div className="navbar_ele n2" style={{ left: onlyWidth / 2.5 }}>
      <Link to="/cs" style={{ textDecoration: "none", color: "white" }}>

          MERCHANDISE
        </Link>
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
      {/* {name && (
        <div className="become_cl_btn">
          <Link to={"/cl"} style={{ textDecoration: "none", color: "white" }}>
            BECOME CL
          </Link>
        </div>
      )} */}
      <SignUpModal
        isOpen={isSignUpModalOpen}
        onClose={() => setIsSignUpModalOpen(false)}
      />
    </div>
  );
}

export default Navbar;
