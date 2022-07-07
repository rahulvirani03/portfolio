import React, { useRef, useState } from "react";
import "../styles/skills.css";
import useOnScreen from "./useOnScreen";
export const Skills = () => {
  const ref = useRef();
  const [count, setCount] = useState(0);
  const isVisible = useOnScreen(ref);

  if (isVisible && count === 0) {
    console.log("inside if");
    setCount(1);
  }

  return (
    <div id="skill-scroll-id" ref={ref} className="skill-main-container">
      <p className="page-header">Skills</p>
      {count === 1 && (
        <div className="skill-center-container">
          <div className="skill">
            <p className="skill-name">React</p>
            <span className="skill-progress react"> </span>
          </div>
          <div className="skill">
            <p className="skill-name">Node</p>
            <span className="skill-progress node"> </span>
          </div>

          <div className="skill">
            <p className="skill-name">Express</p>
            <span className="skill-progress express"> </span>
          </div>
          <div className="skill">
            <p className="skill-name">Mongodb</p>
            <span className="skill-progress mongodb"> </span>
          </div>
          <div className="skill">
            <p className="skill-name">SQL</p>
            <span className="skill-progress sql"> </span>
          </div>
          <div className="skill">
            <p className="skill-name">Firebase</p>
            <span className="skill-progress firebase"> </span>
          </div>

          <div className="skill">
            <p className="skill-name">Html</p>
            <span className="skill-progress html"> </span>
          </div>
          <div className="skill">
            <p className="skill-name">CSS</p>
            <span className="skill-progress css"> </span>
          </div>
        </div>
      )}
    </div>
  );
};
