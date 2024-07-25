import React from "react";
import "./About.css";
import { PiSealCheckBold } from "react-icons/pi";
import { PiPlusCircleFill } from "react-icons/pi";
import { motion } from "framer-motion";
export const About = () => {
  const transition = { type: "spring", duration: 1 };
  return (
    <div className="about-main-card">
      <div className="about-left-side-card">
        <img src="/images/about.png" alt="" />
      </div>
      <div className="about-right-side-card">
        <div className="services-first-card-line">
          <h3>About NGS </h3>
        </div>
        <h1>The Fastest Way To Achieve</h1>
        <h1>
          Your Business <span className="shero-span-color">Success</span>
        </h1>
        <p>
          Collaboratively benchmark superior interfaces rather than-added
          votals. Compellingly deploy holistic growth strategies vis-a-vis cross
          media initiatives. interactively morph
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
          <p>Credibly reinvent sticky partnerships done</p>
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
          <p>Distinctively envisculate data superior content</p>
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
          <p>Monotonectally foster open source</p>
        </motion.div>
        <span></span>
        <div className="about-learning-more-founder-main-card">
          <div className="about-learn-more-button-card">
            <button>Learn More</button>
            <PiPlusCircleFill size={25} />
          </div>
        </div>
      </div>
    </div>
  );
};
