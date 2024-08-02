import React from "react";
import "./Text.css";
import { motion } from "framer-motion";
import { featureVariants } from "../../data/animation";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
export const Text = () => {
  return (
    <motion.div
      initial="offscreen"
      whileInView={"onscreen"}
      variants={featureVariants}
      className="text-main"
    >
      <h1>
        IT Essentials that
        <span className="shero-span-color"> Revolutionize </span>business
      </h1>
      <p>
        Nuhvin relies heavily on IT elements like as AI-driven automation,
        powerful analytics, and cloud computing
        <br /> to modernize its companies AI-drive automation helps to simplify
        operations, while enhanced analytics provides actionable insights. Cloud
        computing provides scalability and agility, allowing for smooth
        operations. These technology developments enable Nuhvin to optimize
        operations, improve client experiences, and generate long-term growth.
      </p>
      <Link to="/out-revolution" className="sabout-link-card">
        <div className="awesome-single-button-card">
          <button style={{ fontSize: "16px" }}>Learn More</button>
          <FaArrowRight size={20} color="#fff" />
        </div>
      </Link>
    </motion.div>
  );
};
