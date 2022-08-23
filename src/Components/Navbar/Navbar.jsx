import React from "react";
import logo from "../../images/logo.png";
import "./style.css";

function Navbar() {
  return (
    <div className="navbar__container">
      <div className="container">
        <div className="navbar">
          <div className="logo">
            <a href="/">
              <img src={logo} alt="playpointLogo" />
            </a>
          </div>
          <div className="links__container">
            <div className="links">
              <a href="/" rel="noreferrer">Home</a>
              <a href="#" rel="noreferrer">Dashboard</a>
              <a href="#">Sports</a>
              <a href="#">Contact</a>
            </div>
            <div className="button">
              <button>Connect Wallet</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
