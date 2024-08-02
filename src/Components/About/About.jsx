import React from "react";
import "./About.css";
import { PiSealCheckBold } from "react-icons/pi";
// import { PiPlusCircleFill } from "react-icons/pi";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
export const About = () => {
  const transition = { type: "spring", duration: 1 };
  return (
    <div className="about-main-card">
      <div className="about-left-side-card">
        <img src="/images/home screen bussiess success image (1).png" alt="" />
      </div>
      <div className="about-right-side-card">
        <div className="services-first-card-line">
          <h3>
            <span style={{ color: "#fff" }}>About</span> Nuhvin{" "}
          </h3>
        </div>
        {/* <h1>The Fastest Way To Achieve</h1>
        <h1>
          Your Business <span className="shero-span-color">Success</span>
        </h1> */}
        <p>
          Nuhvin Global Services is an innovative software company specializing
          in software development, AI, and web services. Our skilled team crafts
          tailored solutions to help businesses succeed in the digital world,
          focusing on technology for meaningful change. We offer robust
          applications, AI insights, and web solutions with a commitment to
          excellence and customer satisfaction. Nuhvin thrives on challenges and
          aims to redefine possibilities in the digital realm.
        </p>
        <motion.div
          initial={{ x: "15rem" }}
          whileInView={{ x: "0rem" }}
          transition={{ ...transition, duration: 2 }}
          className="abou-points-section"
        >
          <span>
            <PiSealCheckBold size={20} color="#fff" />
          </span>
          <p>
            Innovative IT Solutions: Specializes in software development, AI,
            and web development.
          </p>
        </motion.div>
        <motion.div
          initial={{ x: "15rem" }}
          whileInView={{ x: "0rem" }}
          transition={{ ...transition, duration: 4 }}
          className="abou-points-section"
        >
          <span>
            <PiSealCheckBold size={20} color="#fff" />
          </span>
          <p>
            Tailor-Made Expertise: Provides customized solutions to help
            businesses thrive.
          </p>
        </motion.div>
        <motion.div
          initial={{ x: "15rem" }}
          whileInView={{ x: "0rem" }}
          transition={{ ...transition, duration: 6 }}
          className="abou-points-section"
        >
          <span>
            <PiSealCheckBold size={20} color="#fff" />
          </span>
          <p>
            Customer-Centric Excellence: Dedicated to excellence and pushing
            digital boundaries.
          </p>
        </motion.div>
        <span></span>
        {/* <div className="about-learning-more-founder-main-card">
          <div className="about-learn-more-button-card">
            <button>Learn More</button>
            <PiPlusCircleFill size={25} />
          </div>
        </div> */}
        <div className="awesome-button-card">
          <Link to="/out-story" className="sabout-link-card">
            <div className="awesome-single-button-card">
              <button>Our Story</button>
              <FaArrowRight size={20} color="#fff" />
            </div>
          </Link>
          <Link to="/out-visition" className="sabout-link-card">
            <div className="awesome-single-button-card">
              <button>Our Vision</button>
              <FaArrowRight size={20} color="#fff" />
            </div>
          </Link>
          <Link to="/out-mission" className="sabout-link-card">
            <div className="awesome-single-button-card">
              <button>Our Mission</button>
              <FaArrowRight size={20} color="#fff" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
