import React, { useEffect } from "react";
import "../styles/intro.css";
import { motion } from "framer-motion";
import avatar from "../assests/side-avatar.svg";
import { useTypewriter } from "react-simple-typewriter";

export const Intro = () => {
  const { text } = useTypewriter({
    words: [" ", " Frontend", " Backend", " Full Stack"],
    typeSpeed: 150,
    deleteSpeed: 50,
    delaySpeed: 1200,
  });
  const words = ["Frontend", "Backend", "Full Stack"];
  const nameVariant = {
    hidden: {
      x: 50,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  };
  const avatarVariant = {
    hidden: {
      x: -50,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  };
  const containerVariant = {
    hidden: {
      y: 0,
    },
    visible: {
      y: -40,
    },
  };

  const descriptionVariant = {
    hidden: {
      y: 0,
      opacity: 0,
    },
    visible: {
      y: -20,
      opacity: 1,
    },
  };
  useEffect(() => {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
  }, [window]);
  return (
    <motion.div id="intro-scroll-id" className="intro-main-container">
      <motion.div
        variants={containerVariant}
        initial="hidden"
        animate="visible"
        transition={{
          type: "tween",
          duration: 0.5,
          delay: 2,
          stiffness: 50,
        }}
        className="intro-center-container"
      >
        <motion.div
          variants={nameVariant}
          initial="hidden"
          animate="visible"
          className="info-container"
          transition={{
            type: "tween",
            duration: 1,
            delay: 1,
            stiffness: 50,
          }}
        >
          <motion.div className="name">Rahul Virani</motion.div>
          <motion.div className="dev">
            <div>{text}</div>
            <div style={{ marginLeft: "2px" }}> Developer </div>
          </motion.div>
        </motion.div>
        <motion.div className="line"></motion.div>
        <motion.div
          variants={avatarVariant}
          initial="hidden"
          animate="visible"
          transition={{
            type: "tween",
            duration: 1,
            delay: 1,
            stiffness: 50,
          }}
          className="avatar-conatiner"
        >
          <img src={avatar} />
        </motion.div>
      </motion.div>
      <motion.div
        className="description-info"
        variants={descriptionVariant}
        initial="hidden"
        animate="visible"
        transition={{
          type: "tween",
          duration: 1,
          delay: 2,
          stiffness: 50,
        }}
      >
        I am a Full Stack Javascript developer specilizing in React and Node. I
        like to design and develop solutions for real life problems and making
        regular workflows more efficient and less time consuming. I enjoy
        learning new technologies. I get things Done.
      </motion.div>
    </motion.div>
  );
};
