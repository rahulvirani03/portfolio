import React from "react";
import "../styles/navbar.css";
const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="title">Porfolio</div>
      <div className="link-container">
        <div className="link">Projects</div>
        <div className="link">Skills</div>
        <div className="link">Contact</div>
      </div>
    </div>
  );
};

export default Navbar;
