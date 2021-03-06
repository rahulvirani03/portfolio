import React from "react";
import "../styles/projects.css";
import ReactIcon from "../icons/react.svg";
import Firebase from "../icons/firebase.svg";
import Mongo from "../icons/mongodb.svg";
import Redux from "../icons/redux.svg";
import Socket from "../icons/socket.svg";
import Express from "../icons/express.svg";
import Node from "../icons/nodejs.svg";
import skillAssist from "../assests/skillassist.png";
import chatIn from "../assests/chatapp.png";
import reactblog from "../assests/reactblog.png";
import rahulfoods from "../assests/rahul-foods.jpg";
import pdda from "../assests/pdda.png";
export const Projects = () => {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <div id="project-scroll-id" className="projects-main-container">
      <p id="project-scroll-id" className="page-header">
        My Work
      </p>
      <div className="card-container">
        <div
          className="card"
          onClick={() => {
            openInNewTab("http://startup-skill-assist.web.app/landing");
          }}
        >
          <div className="title-container">
            <img src={skillAssist} alt="skillassist" />
            <p className="project-title">skills assist</p>
          </div>
          <div className="description-container">
            <p className="description">
              A web application which provides a platform to showcase your
              skills in any domain and get in touch with people for business.
            </p>
          </div>
          <div className="description-footer">
            <img src={ReactIcon} alt="" className="svg" />
            <img src={Firebase} alt="" className="svg" />
          </div>
        </div>
        <div
          className="card"
          onClick={() => {
            openInNewTab("http://websocket-chatin.netlify.app");
          }}
        >
          <div className="title-container">
            <img src={chatIn} alt="skillassist" />
            <p className="project-title">chat.in</p>
          </div>
          <div className="description-container">
            <p className="description">
              A MERN Stack Chat Applicaton that uses Socket.io for real time
              messages.
            </p>
          </div>
          <div className="description-footer">
            <img src={ReactIcon} alt="" className="svg" />
            <img src={Mongo} alt="" className="svg" />
            <img src={Express} alt="" className="svg" />
            <img src={Socket} alt="" className="svg" />
            <img src={Node} alt="" className="svg" />
          </div>
        </div>
        <div
          className="card"
          onClick={() => {
            openInNewTab("http://blogsreact.netlify.app/");
          }}
        >
          <div className="title-container">
            <img src={reactblog} alt="skillassist" />
            <p className="project-title">react-blog</p>
          </div>
          <div className="description-container">
            <p className="description">
              Blog Application using React and Redux in the front end and has a
              express backend
            </p>
          </div>
          <div className="description-footer">
            <img src={ReactIcon} alt="" className="svg" />
            <img src={Redux} alt="" className="svg" />
            <img src={Mongo} alt="" className="svg" />
            <img src={Express} alt="" className="svg" />
            <img src={Node} alt="" className="svg" />
          </div>
        </div>
        <div
          className="card"
          onClick={() => {
            openInNewTab(
              "https://github.com/rahulvirani03/rahul-foods-frontend"
            );
          }}
        >
          <div className="title-container">
            <img src={rahulfoods} alt="skillassist" />
            <p style={{ color: "white" }} className="project-title">
              rahul-foods
            </p>
          </div>
          <div className="description-container">
            <p className="description">
              A react native mobile application made for maining record of
              customers and sending them bills via text messages
            </p>
          </div>
          <div className="description-footer">
            <img src={ReactIcon} alt="" className="svg" />
            <img src={Mongo} alt="" className="svg" />
            <img src={Express} alt="" className="svg" />
            <img src={Node} alt="" className="svg" />
          </div>
        </div>
        <div
          className="card"
          onClick={() => {
            openInNewTab("http://covi-stat.netlify.app");
          }}
        >
          <div className="title-container">
            <img src={pdda} alt="skillassist" />
            <p style={{ color: "white" }} className="project-title">
              pdda
            </p>
          </div>
          <div className="description-container">
            <p className="description">
              A web application which provides statistics regarding covid-19
              pendemic.
            </p>
          </div>
          <div className="description-footer">
            <img src={ReactIcon} alt="" className="svg" />
            <img src={Firebase} alt="" className="svg" />
          </div>
        </div>
      </div>
    </div>
  );
};
