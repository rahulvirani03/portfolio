import React, { useRef, useState } from "react";
import "../styles/newskill.css";
import ReactIcon from "../icons/react.svg";
import Firebase from "../icons/firebase.svg";
import Mongo from "../icons/mongodb.svg";
import Redux from "../icons/redux.svg";
import Socket from "../icons/socket.svg";
import Express from "../icons/express.svg";
import Node from "../icons/nodejs.svg";
import GraphQL from "../icons/graphql.svg";
import Sql from "../icons/mysql.svg";
import Postgresql from "../icons/postgresql.svg";
import Redis from "../icons/redis.svg";
import Tailwind from "../icons/tailwind.svg";
import Html from "../icons/html5.svg";
import Css from "../icons/css3.svg";
import Flutter from "../icons/flutter.svg";
import Javascript from "../icons/javascript.svg";

export const Skills = () => {
  return (
    <div id="skill-scroll-id" className="skill-main-container">
      <p className="page-header">Skills</p>
      <div className="skill-container">
        <div className="skill-item">
          <img src={ReactIcon} alt="react" className="skill-icon" />
          <p className="skill-name"> React</p>
        </div>
        <div className="skill-item">
          <img src={Express} alt="react" className="skill-icon" />
          <p className="skill-name"> Express JS</p>
        </div>
        <div className="skill-item">
          <img src={Node} alt="react" className="skill-icon" />
          <p className="skill-name"> Node</p>
        </div>
        <div className="skill-item">
          <img src={Firebase} alt="react" className="skill-icon" />
          <p className="skill-name"> Firebase</p>
        </div>
        <div className="skill-item">
          <img src={Redux} alt="react" className="skill-icon" />
          <p className="skill-name"> Redux</p>
        </div>
        <div className="skill-item">
          <img src={Mongo} alt="react" className="skill-icon" />
          <p className="skill-name"> MongoDB</p>
        </div>
        <div className="skill-item">
          <img src={Sql} alt="react" className="skill-icon" />
          <p className="skill-name"> MySQL</p>
        </div>
        <div className="skill-item">
          <img src={Postgresql} alt="react" className="skill-icon" />
          <p className="skill-name"> PostgreSQL</p>
        </div>
        <div className="skill-item">
          <img src={GraphQL} alt="react" className="skill-icon" />
          <p className="skill-name"> GraphQL</p>
        </div>
        <div className="skill-item">
          <img src={Html} alt="react" className="skill-icon" />
          <p className="skill-name"> HTML</p>
        </div>{" "}
        <div className="skill-item">
          <img src={Css} alt="react" className="skill-icon" />
          <p className="skill-name"> CSS</p>
        </div>
        <div className="skill-item">
          <img src={Redis} alt="react" className="skill-icon" />
          <p className="skill-name"> Redis</p>
        </div>
        <div className="skill-item">
          <img src={Tailwind} alt="react" className="skill-icon" />
          <p className="skill-name"> TailwindCSS</p>
        </div>
        <div className="skill-item">
          <img src={Javascript} alt="react" className="skill-icon" />
          <p className="skill-name"> Javascript</p>
        </div>
        <div className="skill-item">
          <img src={Flutter} alt="react" className="skill-icon" />
          <p className="skill-name"> FLutter</p>
        </div>
        <div className="skill-item">
          <img src={Socket} alt="react" className="skill-icon" />
          <p className="skill-name"> Socket</p>
        </div>
      </div>
    </div>
  );
};
