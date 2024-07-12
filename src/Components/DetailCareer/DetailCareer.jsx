import React from "react";
import "./DetailCareer.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const transition = { type: "spring", duration: 1 };
const DetailCareer = () => {
  return (
    <div className="detail-career-main">
      <div className="our-stories-first-card">
        <div className="our-stories-first-card-inner-card">
          <div className="our-stories-fisrt-card-our-story-text">
            <span></span>
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
      <div className="detail-career-table">
        <h1>Rewrite your future. Search and apply for a job today.</h1>
        <div className="detail-career-page-table-main">
          <div className="detail-carrer-page-table-header">
            <span>Job Name</span>
            <span>Location</span>
            <span>Experince Level</span>
            <span>Contract Type</span>
          </div>
          <Link to="/apply-job" className="apply-job-link">
            <div className="detail-career-page-table-body">
              <span>Mobile App Developemnt</span>
              <span>Hyderabad</span>
              <span>6 month</span>
              <span>Full-Time</span>
            </div>
          </Link>
          <Link to="/apply-job" className="apply-job-link">
            <div className="detail-career-page-table-body">
              <span>Web Developer</span>
              <span>Hyderabad</span>
              <span>6 month</span>
              <span>Regular</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DetailCareer;
