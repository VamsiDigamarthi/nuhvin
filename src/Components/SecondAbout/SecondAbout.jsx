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
        <div className="services-first-card-line">
          <span></span>
          <h3>About NGS </h3>
        </div>
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

      {/* right side */}

      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileHover={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 2.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            {/* <img src="/images/ngs-logo.png" alt="" /> */}
          </div>
          <div className="w-secCircle">{/* <img src={Fiverr} alt="" /> */}</div>
          <div className="w-secCircle">
            {/* <img src={Amazon} alt="" /> */}
            <img src="/images/ngs-logo.png" alt="" />
          </div>{" "}
          <div className="w-secCircle">
            {/* <img src={Shopify} alt="" /> */}
          </div>
          <div className="w-secCircle">
            {/* <img src={Facebook} alt="" /> */}
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default SecondAbout;
