import React from "react";
import "../styles/navbar.css";
const Navbar = ({ skillRef }) => {
  const svgVariants = {
    visible: {
      rotate: 0,
      transition: { duration: 1 },
    },
  };

  const pathVariants = {
    hidden: {
      opacity: 0,
      pathLength: 0,
    },
    visible: {
      opacity: 1,

      pathLength: 1,
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  };
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
        Portfolio
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
