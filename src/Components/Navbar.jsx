import React from "react";
import "../styles/navbar.css";
const Navbar = ({ skillRef }) => {
  return (
    <div className="nav-container">
      <div
        className="title"
        onClick={() => {
          document.getElementById("intro-scroll-id").scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "start",
          });
        }}
      >
        Porfolio
      </div>
      <div className="link-container">
        <div
          onClick={() => {
            document.getElementById("project-scroll-id").scrollIntoView({
              behavior: "smooth",
              block: "start",
              inline: "start",
            });
          }}
          className="link"
        >
          Projects
        </div>
        <div
          onClick={() => {
            document.getElementById("skill-scroll-id").scrollIntoView({
              behavior: "smooth",
              block: "start",
              inline: "start",
            });
          }}
          className="link"
        >
          Skills
        </div>
        <div
          onClick={() => {
            document.getElementById("contact-scroll-id").scrollIntoView({
              behavior: "smooth",
              block: "start",
              inline: "start",
            });
          }}
          className="link"
        >
          Contact
        </div>
      </div>
    </div>
  );
};

export default Navbar;
