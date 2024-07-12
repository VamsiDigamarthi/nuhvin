import React from "react";
import "./Quality.css";
import { PiPlusCircleFill } from "react-icons/pi";
const Quality = () => {
  return (
    <div className="quality-main">
      <h1>
        Our<span className="shero-span-color"> Quality</span> Engineering
      </h1>
      <p>
        Developing software that is of the finest excellence after extensive
        testing and optimization.
      </p>
      <p>
        With our solutions for QA testing, test automation, performance testing,
        and security testing, you can develop
      </p>
      <p>
        software that is of the highest caliber. Acquire a market edge over
        competitors.
      </p>
      <div className="about-learn-more-button-card">
        <button>Learn More</button>
        <PiPlusCircleFill size={25} color="White" />
      </div>
    </div>
  );
};

export default Quality;
