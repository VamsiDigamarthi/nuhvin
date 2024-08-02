import React from "react";
import "./TransferCard.css";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

const TransferCar = () => {
  return (
    <div className="transfer-carre">
      {/* <img src="/images/1.png" alt="" /> */}
      <div className="tranfer-car-card">
        <h1>Transform your career</h1>
        <p>
          Join us in the relentless pursuit of better – a better world, better
          career, better opportunities, and better you
        </p>
        <Link to="/career" className="sabout-link-card">
          <div id="btn-width" className="awesome-single-button-card">
            <button>Apply</button>
            <FaArrowRight size={20} color="#fff" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default TransferCar;
