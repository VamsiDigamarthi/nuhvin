import React from "react";
import "./Hero.css";
import { motion } from "framer-motion";
export const Hero = () => {
  const transition = { type: "spring", duration: 1 };
  return (
    <div className="hero-card">
      <div className="second-blur"></div>
      <div className="blur"></div>
      <div className="header">
        <img src="/images/ngs-logo.png" alt="logo" />
        <div className="header-nav-links">
          <span>HOME</span>
          <span>ABOUT</span>
          <span>SERVICES</span>
          <span>HOME</span>
          <span>HOME</span>
          <button>Contact Us</button>
        </div>
      </div>
      <div className="hero-main-card">
        <div className="her-main-text-card">
          <span>MODERN TECHNOLOGIES</span>
          <motion.h1
            initial={{ x: "-40rem" }}
            whileInView={{ x: "0rem" }}
            transition={{ ...transition, duration: 2 }}
          >
            New Generation of{" "}
          </motion.h1>
          <motion.h1
            initial={{ x: "-40rem" }}
            whileInView={{ x: "0rem" }}
            transition={{ ...transition, duration: 3 }}
          >
            Technologies and
          </motion.h1>
          <motion.h1
            initial={{ x: "-40rem" }}
            whileInView={{ x: "0rem" }}
            transition={{ ...transition, duration: 4 }}
          >
            Design
          </motion.h1>
          <div>
            <button className="hero-button">Book A Meeting</button>
          </div>
        </div>
        <div className="hero-taptop-image-card">
          <img src="/images/hero-laptop.png" alt="hero-laptop" />
          {/* <span>Nuhvi global services</span> */}
        </div>
      </div>
    </div>
  );
};
