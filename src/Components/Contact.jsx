import React from "react";
import "../styles/contact.css";
import github from "../icons/github.svg";
import twitter from "../icons/twitter.svg";
import linkedin from "../icons/linkedin.svg";
import instagram from "../icons/instagram.svg";
import mail from "../icons/mail.svg";
export const Contact = () => {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <div id="contact-scroll-id" className="contact-main-container">
      <p className="header">Get in touch!</p>

      <div className="center-container">
        <div className="contact-item-container">
          <div
            className="item-container"
            onClick={() => openInNewTab("https://github.com/rahulvirani03")}
          >
            <div className="contact-item github">
              <img src={github} alt="github" />
            </div>
            <p className="name">rahulvirani03</p>
          </div>
          <div className="item-line"></div>
          <div
            className="item-container"
            onClick={() =>
              openInNewTab(
                " https://www.linkedin.com/in/rahul-virani-797416181/"
              )
            }
          >
            <div className="contact-item linkedin">
              <img src={linkedin} alt="linkedin" />
            </div>
            <p className="name">rahul virani</p>
          </div>
          <div className="item-line"></div>
          <div
            className="item-container"
            onClick={() =>
              openInNewTab(
                "mailto:rahulsvirani25@gmail.com?subject=Enquiry&body=Hello!"
              )
            }
          >
            <div className="contact-item">
              <img src={mail} alt="mail" />
            </div>

            <p className="name">rahulsvirani25@gmail.com</p>
          </div>
          <div className="item-line"></div>
          <div
            className="item-container"
            onClick={() => openInNewTab("https://twitter.com/rahul_virani03")}
          >
            <div className="contact-item twitter">
              <img src={twitter} alt="twitter" />
            </div>
            <p className="name">rahul_virani03</p>
          </div>
          <div className="item-line"></div>
          <div
            className="item-container"
            onClick={() => openInNewTab("https://instagram.com/rahul_virani03")}
          >
            <div className="contact-item insta">
              <img src={instagram} alt="insta" />
            </div>
            <p className="name">rahul_virani03</p>
          </div>
        </div>
        <div className="download-button-container">
          <a
            href="https://rahul-virani-portfolio.herokuapp.com/resume-download"
            download
          >
            <button className="download-button">Download Resume</button>
          </a>
        </div>
      </div>
    </div>
  );
};
