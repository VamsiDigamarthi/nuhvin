import React from "react";
import "./Quality.css";
import { PiPlusCircleFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
const Quality = () => {
  return (
    <div className="quality-main">
      <h1>
        Our<span className="shero-span-color"> Quality</span> Engineering
      </h1>
      <p>
        Developing software that is of the finest excellence after extensive
        testing and optimization.
        <br />
        With our solutions for QA testing, test automation, performance testing,
        and security testing, you can develop
        <br />
        software that is of the highest caliber. Acquire a market edge over
        competitors.
      </p>
      <Link to="/detail-quality" className="sabout-link-card">
        <div id="btn-width" className="awesome-single-button-card">
          <button style={{ fontSize: "16px" }}>Nuhivn Quality</button>
          <FaArrowRight size={20} color="#fff" />
        </div>
      </Link>
    </div>
  );
};

export default Quality;
