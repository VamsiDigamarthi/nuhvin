import React from "react";
import "./ApplyJob.css";
import { motion } from "framer-motion";
const transition = { type: "spring", duration: 1 };
export const ApplyJob = () => {
  return (
    <div className="detail-career-main">
      <div className="our-stories-first-card">
        <div className="our-stories-first-card-inner-card">
          <div className="our-stories-fisrt-card-our-story-text">
            <h3>Our Story</h3>
          </div>
          <h1>What we say to Our people</h1>
          <p>
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a
          </p>
        </div>
        <motion.div
          initial={{ x: -100 }}
          whileInView={{ x: 0 }}
          transition={transition}
          className="our-stories-left-side-image-card"
        >
          <img src="/images/our-story-left.jpg" alt="our-story-left" />
          <motion.div
            // initial={{ rotate: 45 }}
            // whileInView={{ rotate: 0 }}
            // transition={{ duration: 2.5, type: "spring" }}
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            className="our-story-left-side-dotted-card"
          >
            <span className="our-story-left-side-dotted-first-big-dot"></span>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ x: 100 }}
          whileInView={{ x: 0 }}
          transition={{ ...transition, duration: 2 }}
          className="our-stories-right-side-image-card"
        >
          <img src="/images/5ac603279f.jpg" alt="" />
          <div className="our-stories-right-side-dotted-card"></div>
        </motion.div>
      </div>
      <div className="apply-now-job-form-desc-main-card">
        <div className="apply-now-job-form-desc-main-left-card"></div>
        <div className="apply-now-job-form-desc-main-right-card">
          <span>Ref No</span>
          <span>54454</span>
          <span>Posted on</span>
          <span>11 jun 2024</span>

          <span>Contract Type</span>

          <span>Regular</span>

          <span>Location</span>

          <span>Hyderabad</span>

          <span>Busines Unit</span>

          <span>Engineering</span>

          <span>Department</span>

          <span>Engineering</span>
          {/* <button></button> */}
        </div>
      </div>
    </div>
  );
};
