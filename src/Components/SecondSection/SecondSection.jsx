import React from "react";
import "./SecondSection.css";
import { CiPen } from "react-icons/ci";
import { MdOutlineDevicesOther } from "react-icons/md";
const SecondSection = () => {
  return (
    <div className="seond-section-main-card">
      <div className="second-section-first-card">
        <h1>Websites that tell your brand's story</h1>
        <p>
          We fuel the growth of purpose drive brands through strategy
          <br />
          activation, design empowerment, and market adoption.
        </p>
      </div>
      <div className="second-section-second-card">
        <div className="second-section"></div>
        <div className="second-section-second-card-left-side-parent">
          <img src="/images/second-section-second-image.jpg" alt="second" />
        </div>
        <div className="second-section-second-card-right-side-parent">
          <h1>We're design-focused across every touchpoint or interaction</h1>
          <p>
            Everythin we do and dream up has a solid design impact. We create
            human-centered enterprise software that has the polished, snappy
            feel of the best consumer apps.
          </p>
          <div className="second-section-second-card-right-side-design-development-card">
            <div className="second-section-second-card-right-side-design-card">
              <span>
                {" "}
                <CiPen size={40} color="#857FFF" />
              </span>
              <h3>UI/UX Design</h3>
              <p>We design digital products used by millions of people</p>
            </div>
            <div className="second-section-second-card-right-side-development-card">
              <span>
                <MdOutlineDevicesOther color="#857FFF" size={30} />
              </span>
              <h3>Development</h3>
              <p>We design digital products used by millions of people</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
