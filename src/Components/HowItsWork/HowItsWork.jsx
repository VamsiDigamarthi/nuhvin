import React, { useState } from "react";
import "./HowItsWork.css";
import { HiBookmark } from "react-icons/hi";
import { FaCaretDown } from "react-icons/fa";

const HowItsWork = () => {
  const [showHowItsWork, setShowHowItsWork] = useState(0);

  return (
    <div className="how-its-work-main">
      <div className="how-its-work-left-side">
        <img
          src="/images/niclas-illg-FnfGRMXENYg-unsplash.jpg"
          alt="our-value"
        />
      </div>
      <div className="how-its-work-right-side">
        <div className="services-first-card-line">
          {/* <span></span> */}
          <h3>OUR VALUES</h3>
        </div>
        <h1>Value We Give You</h1>
        <p>We always ready to help by providing the best services you</p>
        <div className="how-its-working-single-slider-card">
          <div className="how-its-working-single-slider-inner-first-card">
            <HiBookmark size={25} color="#ff3c00" />
            <h3>We're Innovators</h3>
            <span>
              <FaCaretDown
                onClick={() => setShowHowItsWork(0)}
                size={25}
                color="grey"
              />
            </span>
          </div>
          <p
            className={`${
              showHowItsWork === 0 ? "how-its-work-show" : "how-its-work-hidden"
            }`}
          >
            Our team is enthusiastic about opportunities to innovate and
            discover amazing solutions to tough business challenges. NGS designs
            and executes solutions for clients that save money, boost
            efficiency, and generate revenue.
          </p>
        </div>
        {/* second */}
        <div className="how-its-working-single-slider-card">
          <div className="how-its-working-single-slider-inner-first-card">
            <HiBookmark size={25} color="#ff3c00" />
            <h3>We're Enterpreneurial</h3>
            <span>
              <FaCaretDown
                onClick={() => setShowHowItsWork(1)}
                size={25}
                color="grey"
              />
            </span>
          </div>
          <p
            className={`${
              showHowItsWork === 1 ? "how-its-work-show" : "how-its-work-hidden"
            }`}
          >
            NGS has served on the boards of several ambitious technology
            businesses, helping them achieve commercial success. We may assist
            develop initiatives strategically rather than just delivering the
            technical difficulty at hand.
          </p>
        </div>
        {/* third */}
        <div className="how-its-working-single-slider-card">
          <div className="how-its-working-single-slider-inner-first-card">
            <HiBookmark size={25} color="#ff3c00" />
            <h3>We're Innovators</h3>
            <span>
              <FaCaretDown
                onClick={() => setShowHowItsWork(2)}
                size={25}
                color="grey"
              />
            </span>
          </div>
          <p
            className={`${
              showHowItsWork === 2 ? "how-its-work-show" : "how-its-work-hidden"
            }`}
          >
            As an end-to-end partner, we will see your enterprise through to
            completion, from initial concept to faultless execution, continuous
            assistance, and driving company growth. We've successfully shaped
            concepts, written company strategies, raised funds, established
            support and hosting ecosystems, and launched market endeavors.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItsWork;
