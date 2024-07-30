import React from "react";
import { motion } from "framer-motion";
import "./SecondAbout.css";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
const SecondAbout = () => {
  return (
    <div className="works" id="works">
      {/* left side */}

      <div className="awesome">
        {/* <div className="services-first-card-line">
          <h3>About NGS </h3>
        </div> */}
        <h1>The Fastest Way To Achieve</h1>
        <h1>
          Your Business <span className="shero-span-color">Success</span>
        </h1>
        <p>
          Collaboratively benchmark superior interfaces rather than-added
          votals. Compellingly deploy holistic growth strategies vis-a-vis cross
          medis initiatives. interactively morph
        </p>
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
      <div className="second-about-right-side">
        <img src="/images/home screen bussiess success image (2).png" alt="" />
      </div>
      {/* right side */}
    </div>
  );
};

export default SecondAbout;
