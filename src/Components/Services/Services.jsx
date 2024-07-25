import React from "react";
import "./Services.css";
import { TbDeviceImacCode } from "react-icons/tb";
import { FaAngleDoubleRight } from "react-icons/fa";
const Services = () => {
  return (
    <div className="services-main-card">
      {/* <img src="/images/e9daeefbe1.jpg" alt="" /> */}
      <div className="services-first-card-line">
        {/* <span></span> */}
        <h3>SERVICES</h3>
      </div>
      <h1>We Provide Any Business</h1>
      <h1>
        Problem <span className="shero-span-color">Services</span>
      </h1>
      <div className="all-services-main-card">
        <div className="all-services-single-card">
          <TbDeviceImacCode size={50} color="##ff6600" />
          <h2>Web Site Development</h2>
          <span>Dramatically cultivate qualt user cebtric growth</span>
          <div className="all-services-single-card-button-card">
            <button>Read More</button>
            <FaAngleDoubleRight size={20} color="grey" />
          </div>
          <h4 className="all-services-single-card-number">01</h4>
        </div>
        {/* second */}
        <div className="all-services-single-card">
          <TbDeviceImacCode size={50} color="##ff6600" />
          <h2>Software Development</h2>
          <span>Dramatically cultivate qualt user cebtric growth</span>
          <div className="all-services-single-card-button-card">
            <button>Read More</button>
            <FaAngleDoubleRight size={20} color="grey" />
          </div>
          <h4 className="all-services-single-card-number">02</h4>
        </div>
        {/* third */}
        <div className="all-services-single-card">
          <TbDeviceImacCode size={50} color="##ff6600" />
          <h2>Mobile App Development</h2>
          <span>Dramatically cultivate qualt user cebtric growth</span>
          <div className="all-services-single-card-button-card">
            <button>Read More</button>
            <FaAngleDoubleRight size={20} color="grey" />
          </div>
          <h4 className="all-services-single-card-number">03</h4>
        </div>
        {/* fouth */}
        <div className="all-services-single-card">
          <TbDeviceImacCode size={50} color="##ff6600" />
          <h2>Database Management</h2>
          <span>Dramatically cultivate qualt user cebtric growth</span>
          <div className="all-services-single-card-button-card">
            <button>Read More</button>
            <FaAngleDoubleRight size={20} color="grey" />
          </div>
          <h4 className="all-services-single-card-number">04</h4>
        </div>
      </div>
    </div>
  );
};

export default Services;
