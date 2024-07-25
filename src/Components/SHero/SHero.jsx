import React, { useEffect, useState } from "react";
import "./Shero.css";
import { IoMdPlay } from "react-icons/io";
import { GiStarShuriken } from "react-icons/gi";
import { FaCircle } from "react-icons/fa6";
import { FaRegCircle } from "react-icons/fa6";
import { motion } from "framer-motion";
export const SHero = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, currentTarget } = event;
      const screenWidth = currentTarget.clientWidth;
      const mouseXPercentage = clientX / screenWidth;

      // Calculate the offset based on mouse position
      const newOffset = (mouseXPercentage - 0.5) * -60; // -20px to 20px range
      setOffset(newOffset);
    };

    const section = document.querySelector(".shero-second-main-card");
    section.addEventListener("mousemove", handleMouseMove);

    // Cleanup event listener on component unmount
    return () => {
      section.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  const transition = { type: "spring", duration: 1 };
  return (
    <div className="shero-main-card">
      <div className="shero-second-main-card">
        <div className="shero-second-left-card">
          <motion.span
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            className="shero-first-start"
          >
            <GiStarShuriken size={25} color="#ff3c00" />
          </motion.span>
          <div className="s-hero-working-with-ngs-card">
            {/* <span></span> */}
            <h3>
              Work with <span className="shero-span-color">NGS</span>
            </h3>
          </div>
          <motion.h1
            initial={{ x: "-15rem" }}
            whileInView={{ x: "0rem" }}
            transition={{ ...transition, duration: 2 }}
          >
            Create the Empactful
          </motion.h1>
          <motion.h1
            initial={{ x: "-15rem" }}
            whileInView={{ x: "0rem" }}
            transition={{ ...transition, duration: 4 }}
          >
            Digital <span className="shero-span-color">Services</span>
          </motion.h1>
          <span>
            Quickly parallel task bleeding-edge mindshare vis-a-vis
            best-of-breed testing procedures. Globally myocardinate world
          </span>
          <div class="shero-small-span-animated-parent-div">
            <span class="shero-small-span-animated-parent-div-moving-span"></span>
          </div>
          {/* <div className="shero-left-button-card">
            <button>Work Together</button>
            <span>
              <IoMdPlay size={25} color="#ff6600" />
            </span>
          </div> */}
        </div>
        <img
          style={{ transform: `translateX(${offset}px)` }}
          src="/images/5db7921e05-removebg-preview.png"
          alt=""
        />
        {/* <div className="shero-second-right-card">
          <div className="shero-second-right-image-card">
            <img src="/images/istockphoto-616902766-612x612.jpg" alt="" />
          </div>
          <div className="shero-second-right-orange-circle-card"></div>
          <div className="shero-second-right-white-circle-card"></div>
          <span className="shero-second-right-first-circle">
            <FaCircle color="#ff6600" size={40} />
          </span>
          <span className="shero-second-right-second-circle">
            <FaRegCircle size={40} color="grey" />
          </span>
        </div> */}
      </div>
    </div>
  );
};
